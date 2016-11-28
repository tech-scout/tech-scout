import React, { Component } from 'react';
import './EventItem.css'

const Event = props => (
  <div className="event_item">
    <h2>Event Title: {props.name}</h2>
    <p>Description:  {props.description}</p>
    <p>Date Created:  {props.date_created}</p>
    <p>Image Url:  {props.img_url}</p>

    {/* need to customize editing options for only creators of event */}
    <button>Delete Event!</button>
    <button>Update Event!</button>
  </div>
);

export default Event;
