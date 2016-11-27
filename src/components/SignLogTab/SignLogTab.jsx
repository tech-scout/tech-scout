import React, { Component } from 'react';
import Form_Sign from '../Form_Sign/Form_Sign.jsx';
import Form_Log from '../Form_Log/Form_Log.jsx';
import './SignLogTab.css';

export default class SignLogTab extends Component {
  constructor(props) {
    super();

    this.state = {
      login: true,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.loginState = this.loginState;
  }

  handleTabClick(e) {
    this.setState({login: !(this.state.login)})
  }

  loginState() {
    return (this.state.login ? <Form_Log /> : <Form_Sign />);
  }

  render(){
    return (
      <div>
      <div className="loginTabs">
        <div className="signup" onClick={this.handleTabClick}>Sign up</div>
        <div className="login" onClick={this.handleTabClick}> Log in</div>

        {this.loginState()}
      </div>
      <p id="try">Try</p>
      </div>
    );
  }
}
