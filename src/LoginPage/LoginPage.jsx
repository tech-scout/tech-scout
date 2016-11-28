import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import SignLogTab from '../components/SignLogTab/SignLogTab.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './LoginPage.css';

export default class LoginPage extends Component {
  render(){
    return(
      <div className="LoginPage">
      <Nav />
      <SignLogTab />
      <Footer />
      </div>
      )
  }
}
