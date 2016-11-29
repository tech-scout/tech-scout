import React, { Component } from 'react';
import './Form_Sign.css'

export default class Form_Sign extends Component {

  constructor(props) {

    super();
    this.state = {
      username: '',
      title: '',
      img_url: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then((data) => {
      localStorage.setItem('techScoutToken', data);
    });
  }

  render() {
    return(
      <div className="signup_form">
        <form action="../api/users" method="POST">
          <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username"/>
          <input type="text" value={this.state.title} onChange={this.handleChange} name="title" placeholder="professional title"/>
          <input type="text" value={this.state.img_url} onChange={this.handleChange} name="img_url" placeholder="url for profile picture"/>
          <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email"/>
          <input type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="password"/>
          <input value="Sign Up" onClick={this.handleSubmit} id="submit" type="submit"/>
        </form>
      </div>
      )
  }
}
