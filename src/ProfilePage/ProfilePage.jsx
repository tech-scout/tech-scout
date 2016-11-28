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

    this.addEvent = this.addEvent.bind(this);
  }

  // executed once the ProfilePage component mounts
  componentDidMount() {
    AjaxAdapter.getAllEvents()
      .then((allEvents) => {
        this.setState({ events: allEvents });
// console.log('this.state.events...', this.state.events);
      }
    )
    .catch((error) => {
        throw error;
    });
  }

  // need to change add Event function to use AjaxAdapter.addEvent after creating that as function as well
  addEvent(title, desc, url) {
// console.log('title....', title);
    fetch('./events', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({title, desc, url})
// console.log('body....', body);
    })
      .then((r) => {
        r.json();
      })
      .then((newEvent) => {
// console.log('newEvent....', newEvent);
        // clone existing state
        const newState = {...this.state.events};
        newState[newEvent.id] = newEvent;
        this.setState({events: newState});
        next();
      })
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
