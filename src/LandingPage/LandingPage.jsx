import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import EventList from '../components/EventList/EventList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Link } from 'react-router';
import "./LandingPage.css";
export default class LandingPage extends Component {
  render(){
    return(
      <div className="landingPage">
      <Nav />
      <Link style={{textDecoration: 'none'}} to="Signup_Login">SignUp/Login</Link>
      <signup-login />
      <Footer />
      </div>
      )
  }
}
