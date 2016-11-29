import React, { Component } from 'react';
import './ProfilePage.css';
import Nav from '../components/Nav/Nav.jsx';
import Footer from '../components/Footer/Footer.jsx';
import EventList from '../components/EventList/EventList.jsx'
import AjaxAdapter from '../helpers/AjaxAdapter';

export default class ProfilePage extends Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: {},
      events: {},
      following: {},
      followers: {},
    };
  }

  // executed once the ProfilePage component mounts
  componentDidMount() {
    AjaxAdapter.getEventsForUser()
      .then((allEvents) => {
        console.log(allEvents);
        this.setState({ events: allEvents });
      }
    )
    .catch((error) => {
        throw error;
    });
  }

  render() {
    return(
      <div className="profContain">
        <Nav />
        <img src="#" alt="Profile_img"/>
        <div className="userInfo">user info</div>
        <div className="interests"> interests
        </div>
        <div className="friendList"> friends list
        </div>
         <EventList
            events={this.state.events}
          />
        <Footer />
      </div>
      )
  }
}
