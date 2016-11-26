import React, { Component } from 'react';
import EventList from './EventList/EventList.jsx';
import "./App.css";
import Nav from "./Nav/Nav.js";
import About from './About/About.jsx';
import EventForm from './EventForm/EventForm.jsx';

export default class App extends
Component {
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
      <div className="event_list">

      <Nav
        add={this.addButton.bind(this)}
        />
        <EventList
        collection={this.state.events}
        />
        <h1>Add Event Form</h1>
        <EventForm addEvent={this.addEvent.bind(this)}
        />
      </div>
    );
  }
}
