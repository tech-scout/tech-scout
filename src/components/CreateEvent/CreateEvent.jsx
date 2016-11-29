import React, { Component } from 'react';
import './CreateEvent.css';
import EventForm from '../EventForm/EventForm.jsx';


export default class CreateEvent extends Component {



  render(){

    return(
      <div className="CreateEvent">
      <button className='created' onClick={this.props.CreateEvent}> Create Event </button>
      <EventForm
      />
      </div>
      )
  }
}
