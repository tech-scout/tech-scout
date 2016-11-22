import React, { Component } from 'react';
import EventList from './EventList/EventList.jsx';
import "./App.css";
import Nav from "./Nav/Nav.js";

export default class App extends Component {

  addButton(){
     let x = document.getElementById('header');
     let y = document.createElement('button');
     y.innerText='profile';
     x.append(y);
  }

  render() {
    return (
      <div className="event_list">
     <EventList />
      <div>
        <Nav
        add={this.addButton.bind(this)}
        />
      </div>
      );
  }

}
