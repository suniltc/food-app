import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getItems } from '../actions/home';

import Home from '../components/Home';

class HomePage extends Component {

	componentDidMount(){
		this.props.actions.getItems();
	}

  render() {
  	const { getItems } = this.props;

    return (
      	<div className="container-fluid product-container">
        	<Home
        		getItems={getItems}/>
      	</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        getItems: state.getItems,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ getItems }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);