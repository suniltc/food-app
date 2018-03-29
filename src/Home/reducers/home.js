import * as types from '../constants';

const InitialState =  {
	isLoading:false,
	error: false,
	data: [],
	hasData: false
};

export  function getItemsReducer(state= InitialState, action = null) {
	switch(action.type) {
		case types.IS_LOADING_ITEMS:
			return Object.assign({}, state, {isLoading:true});
		case types.GET_ITEMS:
			return Object.assign({}, state, {isLoading:false, error:false, data:action.payload, hasData:true });
		case types.FAILED_GET_ITEMS:
			return Object.assign({}, state, {isLoading:false, error:true, data:action.payload, hasData:false });
		default:
		return state;
	}
}

export  function getItemReducer(state= InitialState, action = null) {
	switch(action.type) {
		case types.GET_ITEM:
			return Object.assign({}, state, {isLoading:false, error:false, data:action.payload, hasData:true });
		case types.FAILED_GET_ITEM:
			return Object.assign({}, state, {isLoading:false, error:true, data:action.payload, hasData:false });
		default:
		return state;
	}
}