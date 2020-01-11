import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NotFound from '../not-found';
import App from '../app';
const Router = () => <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route component={NotFound}/>
  </Switch>
  </BrowserRouter>

export default Router;