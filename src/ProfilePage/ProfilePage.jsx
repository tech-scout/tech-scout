import React, { Component } from 'react';
import { Link } from 'react-router';
import EventList from '../components/EventList/EventList.jsx';
import "./ProfilePage.css";
import Nav from "../components/Nav/Nav.jsx";
import About from '../components/About/About.jsx';
import EventForm from '../components/EventForm/EventForm.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default class ProfilePage extends Component {
  constructor(props) {
    super();

    this.state = {
      events: {},
    };

    this.addEvent = this.addEvent.bind(this);
  }

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
        console.log('response (r) is: ', r);
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
    return (
      <div className="ProfilePage">

      <Nav/>
        <div id="a">
          <a href="#">Sign Out</a>
        </div>

       <EventList
          events={this.state.events}
          getAllEvents={this.getAllEvents.bind(this)}
        />

        <h1>Add Event Form</h1>
        <EventForm addEvent={this.addEvent.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}
// add={this.addButton.bind(this)}
