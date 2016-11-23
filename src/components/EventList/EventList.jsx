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
    {generateEvents(props.collection)}
  </div>
);
<<<<<<< HEAD

export EventList
=======
export default EventList;
>>>>>>> 9c2da89108b952cab66b4df001c8139055a73167
