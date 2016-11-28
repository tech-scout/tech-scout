import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router';


export default class Nav extends Component {



  render() {
    return (
        <div id="header">
        <Link style={{textDecoration: 'none'}} to="/app"><h1><span id="blue">Tech</span><span id="green">Scout</span></h1></Link>

        </div>
      );
  }

}
