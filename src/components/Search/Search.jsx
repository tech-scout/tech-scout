import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render(){
    return(
      <div className="searchbar">
      <h4>Search for a tech event near you</h4>
      <input id="search" type="text" placeholder="Search"/>
      <input id="search_button" value="Search" type="submit"/>
      </div>
      )
  }
}
