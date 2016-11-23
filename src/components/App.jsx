import React, { Component } from 'react';
import EventList from './EventList/EventList.jsx';
import "./App.css";
import Nav from "./Nav/Nav.js";
import About from './About/About.jsx'

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
      <Nav
        add={this.addButton.bind(this)}
        />
      <EventList />

      </div>
      );
  }

}
