import React, { Component } from 'react';
import './ProfilePage.css';
import Nav from '../components/Nav/Nav.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default class ProfilePage extends Component {
  render() {
    return(
      <div>
        <Nav />
        <img src="#" alt="Profile_img"/>
        <div className="userInfo">user info</div>
        <div className="users_events"> user events
        </div>

        <div className="interests"> interests
        </div>
        <div className="friendList"> friends list
        </div>


        <Footer />
      </div>
      )
  }
}
