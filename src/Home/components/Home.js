import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { Link } from 'react-router-dom';
import productComponent from '../../components';
import ProgressiveImage from 'react-progressive-image';

class Home extends Component {
  render() {
    const { getItems } = this.props;

    return (
        <div className="row">
            {
                _.map(getItems.data, (getItem, index) => {
                    return(
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 products">
                            <div className="thumbnail-product">
                                <Link to={`details/${getItem.name}`}>
                                <ProgressiveImage
                                    src={getItem.image}
                                    placeholder={"/img/placeholder.png"}>
                                    {(src) =>
                                        <img
                                            src={src}
                                            alt={getItem.name}
                                            className='img-thumbnail rounded-0 p-0 border-light'/>
                                        }
                                </ProgressiveImage>
                                </Link>
                                <h4 className="product-title text-capitalize">{getItem.name}</h4>
                                <div className="clearfix">
                                    <productComponent.NonVeg nonVeg={getItem.nonVeg}/>
                                    {
                                        getItem.spicy &&
                                        <productComponent.Spicy/>
                                    }
                                    <Link to={`details/${getItem.name}`} className="btn btn-primary float-right details" role="button">View Details</Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
  }
}

Home.propTypes = {
    getItems: PropTypes.object.isRequired
};

export default Home;