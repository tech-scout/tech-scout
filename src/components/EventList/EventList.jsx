import React, { Component } from 'react';
import EventItem from '../EventItem/EventItem.jsx';

const generateEvents = collection =>
  Object.keys(collection)
    .map((eventID, i) => (
      <EventItem
        key={i}
        title={collection[eventID].title}
        desc={collection[eventID].description}
      />
    ));

const EventList = props => (
  <div className="event_list">
    <h1>showing list of events</h1>
    {generateEvents(props.collection)}
  </div>
);
export default EventList;
