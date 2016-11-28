import React, { Component } from 'react';
import './Form_Sign.css'

export default class Form_Sign extends Component {
  render() {
    return(
      <div className="signup_form">
        <form action="/app/profile" method="POST">
          <input type="text" name="username" placeholder="username"/>
          <input type="text" name="title" placeholder="professional title"/>
          <input type="text" name="img_url" placeholder="url for profile picture"/>
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="password"/>
          <input value="Sign Up" id="submit" type="submit"/>
        </form>
      </div>
      )
  }
}
