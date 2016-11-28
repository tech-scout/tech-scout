import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render(){
    return(
      <div>
      <h3>Search for a tech event near you</h3>
      <input id="search" type="text" placeholder="Search"/>
      <input id="search_button" value="Search" type="submit"/>
      </div>
      )
  }
}
