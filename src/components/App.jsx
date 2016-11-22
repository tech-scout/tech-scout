import React, { Component } from 'react';
import EventList from './EventList/EventList.jsx';
import About from '/components/About/About'


export default class App extends Component {

  render() {
    return (
      <div className="event_list">
     <EventList />
      </div>
      );
  }

}
