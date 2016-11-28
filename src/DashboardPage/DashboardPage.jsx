import React, { Component } from 'react';
import EventList from '../components/EventList/EventList.jsx';
import "./DashboardPage.css";
import Nav from "../components/Nav/Nav.jsx";
import About from '../components/About/About.jsx';
import EventForm from '../components/EventForm/EventForm.jsx';
import Footer from '../components/Footer/Footer.jsx';
import AjaxAdapter from '../helpers/AjaxAdapter';
import Search from '../components/Search/Search.jsx';
import CreateEvent from '../components/CreateEvent/CreateEvent.jsx';
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
    eventCreated(){
      //button that opens modal
      const button = document.getElementsByClassName('created');
      const wrapper = document.getElementsByClassName('eventFormWrapper')[0].style.display="block";
      const close = document.getElementsByClassName("close");
  }

  render() {
    return (
      <div className="ProfilePage">

      <Nav/>
        <div id="a">
          <a href="#">Sign Out</a>
        </div>
        <Search />
        <CreateEvent
        CreateEvent={this.eventCreated.bind(this)}
        />

        <div className="users_events">
          <EventList
            events={this.state.events}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
