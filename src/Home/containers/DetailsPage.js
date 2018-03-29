import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getItems, getItem } from '../actions/home';

import Details from '../components/Details';

class DetailsPage extends Component {

    componentDidMount(){
        this.props.actions.getItems();
        this.props.actions.getItem(this.props.match.params.title);
    }

  render() {
    const { getItem } = this.props;

    return (
        <div className="container-fluid product-container">
            <Details
                getItem={getItem}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        getItem: state.getItem,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ getItems, getItem }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);