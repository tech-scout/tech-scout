import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem.jsx';
import './EventList.css';

const generateEvents = events =>
  Object.keys(events)
    .map((eventID, i) => (
      <EventItem
        key={i}
        name={events[eventID].name}
        description={events[eventID].description}
        date_created={events[eventID].date_created}
        img_url={events[eventID].img_url}
      />
    ));

const EventList = props => (
  <div className="event_list">
    <h1>showing list of events</h1>
    {generateEvents(props.events)}
  </div>
);

export default EventList;
