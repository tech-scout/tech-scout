import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem.jsx';

const generateEvents = events =>
  Object.keys(events)
    .map((eventID, i) => (
      <EventItem
        key={i}
        title={events[eventID].title}
        desc={events[eventID].description}
      />
    ));

const EventList = props => (
  <div className="event_list">
    <h1>showing list of events</h1>
    {generateEvents(props.events)}
  </div>
);

export default EventList;
