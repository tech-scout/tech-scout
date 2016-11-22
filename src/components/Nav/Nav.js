import React, { Component } from 'react';



export default class Nav extends Component {



  render() {
    return (
      <div>
        <div id="header">
          <h1>TechScout</h1>
          <button onClick={this.props.add}>Sign Up</button>
          <button>Log In</button>
        </div>
      </div>
      );
  }

}
