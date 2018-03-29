import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import HomePage from './Home/containers/HomePage';
import DetailsPage from './Home/containers/DetailsPage';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/details/:title" component={DetailsPage}/>
            <Redirect to="/" />
        </Switch>
        );
  }
}

export default App;