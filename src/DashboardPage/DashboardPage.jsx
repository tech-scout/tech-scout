import React, { Component } from 'react';
import EventList from '../components/EventList/EventList.jsx';
import "./DashboardPage.css";
import Nav from "../components/Nav/Nav.jsx";
import About from '../components/About/About.jsx';
import EventForm from '../components/EventForm/EventForm.jsx';
import Footer from '../components/Footer/Footer.jsx';
import AjaxAdapter from '../helpers/AjaxAdapter';

export default class DashboardPage extends Component {
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
console.log('this.state.events...', this.state.events);
      }
    )
    .catch((error) => {
        throw error;
    });
  }

  addEvent(name, desc, img_url) {
    AjaxAdapter.addEvent({ name, desc, img_url })
    .then((newEvent) => {
      // clone existing state
      const newState = { ...this.state.events };
      newState[newEvent.id] = newEvent;
      this.setState({ events: newState });
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

        <div className="users_events"> user events
          <EventList
            events={this.state.events}
          />
        </div>

        <h1>Add Event Form</h1>
        <EventForm addEvent={this.addEvent.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}
// add={this.addButton.bind(this)}
