import React, { Component } from 'react';
import './Form_Log.css'
export default class Form_Log extends Component {
  render(){
    return(

      <div className="login_form">
         <form action="/app/profile" method="POST">
          <input id="top" className="input" type="text" name="username" placeholder="username"/>
          <input className="input" type="text" name="password" placeholder="password"/>
          <input value="Log In" className="input" id="submit" type="submit"/>
        </form>
      </div>
      )
  }
}
