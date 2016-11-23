import React, { Component } from 'react';
import './EventItem.css'

const Event = props => (
  <div className="event_item">
    <img src={props.url} alt=""/>
    <h2>Event Title</h2>
    <h5>hosted by: {props.eventAuthor}</h5>
    <p>Description:  {props.eventDescription}</p>
  </div>
);

export default Event;
