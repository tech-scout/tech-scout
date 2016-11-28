import React, { Component } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import EventList from '../components/EventList/EventList.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Link } from 'react-router';
import Search from '../components/Search/Search.jsx';
import "./LandingPage.css";
export default class LandingPage extends Component {
  render(){
    return(
      <div className="landingPage">
      <Nav />
      <Search />
      <p><Link style={{textDecoration: 'none'}} to="Signup_Login">SignUp/Login</Link></p>
      <div className="event_list">

      </div>
      <Footer />
      </div>
      )
  }
}
