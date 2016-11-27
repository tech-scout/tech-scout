import React, { Component } from 'react';
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
    fetch('./events', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({title, desc, url})
    })
      .then(r => r.json())
      .then((newEvent) => {
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

  addButton(){
     let x = document.getElementById('header');
     let y = document.createElement('button');
     y.innerText='profile';
     x.append(y);
  }

  render() {
    return (
      <div className="ProfilePage">

      {/* Create link to lead to specified react route */}
      <Link to="eventform">Visit eventform route</Link>

      <Nav
        add={this.addButton.bind(this)}
        />
        <a href="#">Signout</a>
       <EventList
        collection={this.state.events}
        />
        <h1>Add Event Form</h1>
        <EventForm addEvent={this.addEvent.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}
