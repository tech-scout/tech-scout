import React, { Component } from 'react';
import './EventItem.css'

export default class EventItem extends Component {
  render(){
    return(
      <div className="event_item">
        <img src="" alt=""/>
        <h2>Event Title</h2>
        <h5>hosted by: this.prop.createdby</h5>
        <p>Description loddie doddie dod</p>
      </div>
      )
  }
}
