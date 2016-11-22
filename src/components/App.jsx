import React, { Component } from 'react';
import "./App.css";
import Nav from "./Nav/Nav.js";


export default class App extends Component {
AddButton(){
 let x = document.getElementById('header');
 let y = document.createElement('button');
 y.innerText='profile';
 x.append(y);
}
  render() {
    return (
      <div>
        <Nav
        add={this.AddButton.bind(this)}
        />
      </div>
      );
  }

}
