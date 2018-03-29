import {combineReducers} from 'redux';
import { getItemsReducer, getItemReducer } from '../Home/reducers/home';

const rootReducer = combineReducers({
	getItems: getItemsReducer,
	getItem: getItemReducer
});

export default rootReducer;