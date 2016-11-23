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
<<<<<<< HEAD
      <Nav
        add={this.addButton.bind(this)}
        />
      <EventList />

=======

        <EventList />
          <div>
            <Nav
              add={this.addButton.bind(this)}
            />
          </div>
>>>>>>> 03f11eb5d7265d3233570f8457828d65ff2e95af
      </div>
    );
  }
}
