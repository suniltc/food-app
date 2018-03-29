import React, { Component } from 'react';
import PropTypes from 'prop-types';

import productComponent from '../../components';
import Image from "react-graceful-image";

class Details extends Component {
  render() {
    const { getItem } = this.props;

    return (
        <div className="row-fluid">
        {
            getItem.hasData &&
            <div className="product">
                <div className="col-sm-12 col-md-4 col-lg-4 float-left">
                    <Image
                        src={getItem.data.image}
                        alt={getItem.data.name}
                        className="img-thumbnail rounded-0 p-0 border-light product-img"
                        width="640"
                        height="480"
                        noLazyLoad={true}
                        retry={{ count: 15, delay: 3, accumulate: "add" }}/>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 float-left">
                    <h1 className="product-title text-capitalize">{getItem.data.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: getItem.data.description }} />
                    <hr/>
                    <productComponent.NonVeg nonVeg={getItem.data.nonVeg}/>
                    {
                        getItem.data.spicy &&
                        <productComponent.Spicy/>
                    }
                </div>
            </div>
        }

        {
            getItem.error &&
            <p>{getItem.data}</p>
        }
        </div>
    );
  }
}

Details.propTypes = {
    getItem: PropTypes.object.isRequired
};


export default Details;