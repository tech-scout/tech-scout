import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DashboardPage  from './DashboardPage/DashboardPage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import ProfilePage from './ProfilePage/ProfilePage.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
        <Route path='/app' component={LandingPage}></Route>
        <Route path='/app/signup_login' component={LoginPage}></Route>
        <Route path='/app/profile' component={ProfilePage}></Route>
        <Route path='/app/dashboard' component={DashboardPage}></Route>
      </Router>, document.querySelector('#root-container'));

