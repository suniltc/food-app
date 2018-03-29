import * as types from '../constants';
import axios from 'axios';
import _ from 'lodash';

const pass = (type, json) => {
	return{
		type: type,
		payload: json
	};
}

const say = (type) => {
	return{
		type: type
	};
}

export const getItems = () => (dispatch) => {
	dispatch(say(types.IS_LOADING_ITEMS));
	
	axios.get('http://texpertise.in/data.php')
	.then(function (response) {
		dispatch(pass(types.GET_ITEMS, response.data));
	})
	.catch(function (error) {
		// error
		if (error.response) {
	    	dispatch(pass(types.FAILED_GET_ITEMS, error.response.data));
		}
	});
}

export const getItem = (props) => (dispatch, store) => {
	if(store().getItems){
		let details = _.find(store().getItems.data, function(o) { return o.name === props; });
		
		if(details){
			dispatch(pass(types.GET_ITEM, details));
		}
		else{
			dispatch(pass(types.FAILED_GET_ITEM, "Failed to get data"));
		}
	}
}