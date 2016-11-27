import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import EventList from '../components/EventList/EventList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Link } from 'react-router';
export default class LandingPage extends Component {
  render(){
    return(
      <div className="LandingPage">
      <Nav />
      Hello my name is
      <Link to="Signup_Login">Signup/Login</Link>
      <Footer />
      </div>
      )
  }
}
