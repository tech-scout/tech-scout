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
      events: {},
    };
  }

  // executed once the ProfilePage component mounts
  componentDidMount() {
    AjaxAdapter.getAllEvents()
      .then((allEvents) => {
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
        <div id="bottomPage">
        <div className="friendList"> friends list
        </div>
        <div className="users_events"> user events
          <EventList
            events={this.state.events}
          />
        </div>
        </div>
        <Footer />
      </div>
      )
  }
}
