import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './Home/containers/HomePage';
import DetailsPage from './Home/containers/DetailsPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="details/:title" component={DetailsPage}/>
	</Route>
);