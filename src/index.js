import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DashboardPage      from './DashboardPage/DashboardPage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import LandingPage from './LandingPage/LandingPage.jsx';
import ProfilePage from './ProfilePage/ProfilePage.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      token: '',
    };
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(user, token) {
    this.setState({
      user: user,
      token: token,
    });
  }
  getState() {
    return this.state;
  }
  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/app' authenticate={this.authenticate} userID={this.state.user} token={this.state.token} component={LandingPage}></Route>
        <Route path='/app/signup_login' authenticate={this.authenticate} userID={this.state.user} token={this.state.token} component={LoginPage}></Route>
        <Route path='/app/profile' authenticate={this.authenticate} userID={this.state.user} token={this.state.token} component={ProfilePage}></Route>
        <Route path='/app/dashboard' authenticate={this.authenticate} userID={this.state.user} token={this.state.token} component={DashboardPage}></Route>
      </Router>);
  }
}

ReactDOM.render(<Index />, document.querySelector('#root-container'));

