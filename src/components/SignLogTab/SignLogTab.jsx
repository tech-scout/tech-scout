import React, { Component } from 'react';
import Form_Sign from '../Form_Sign/Form_Sign.jsx';
import Form_Log from '../Form_Log/Form_Log.jsx';
import './SignLogTab.css';

export default class SignLogTab extends Component {
  constructor(props) {
    super();

    this.state = {
      login: false,
    };

    this.handleTabClickSign = this.handleTabClickSign.bind(this);
    this.handleTabClickLog = this.handleTabClickLog.bind(this);
    this.loginState = this.loginState;
  }

  handleTabClickSign(e) {
    this.setState({login: false
  })
  }

   handleTabClickLog(e) {
    this.setState({login: true
  })
  }

  loginState() {
    return (this.state.login ? <Form_Log /> : <Form_Sign />);
  }

  render(){
    return (
      <div>
      <div className="loginTabs">
        <div className="signup" onClick={this.handleTabClickSign}>Sign up</div>
        <div className="sep"></div>
        <div className="login" onClick={this.handleTabClickLog}> Log in</div>

        {this.loginState()}
      </div>
      </div>
    );
  }
}
