import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import Form_Sign from '../components/Form_Sign/Form_Sign.jsx';
import Form_Log from '../components/Form_Log/Form_Log.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './LoginPage.css';

export default class LoginPage extends Component {
  render(){
    return(
      <div className="LoginPage">
      <Nav />

      <a href="#">Sign Up </a>

      <a href="#">Login</a>

      <Form_Sign />
      <Form_Log />
      <Footer />
      </div>
      )
  }
}
