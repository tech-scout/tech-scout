import React    from 'react';
import ReactDOM from 'react-dom';
import ProfilePage      from './ProfilePage/ProfilePage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/app' component={LandingPage}></Route>
    <Route path='/app/Signup_Login' component={LoginPage}></Route>
    <Route path='/app/ProfilePage' component={ProfilePage}></Route>
</Router>, document.querySelector('#root-container'));
