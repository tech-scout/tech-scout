import React, { Component } from 'react';
import './Form_Log.css'
export default class Form_Log extends Component {

  constructor(props) {

    super();
    this.state = {
      username: '',
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
    fetch(`/api/users?username=${this.state.username}&password=${this.state.password}`)
    .then(r => r.json())
    .then((data) => {
      localStorage.setItem('techScoutToken', data);
    });
  }
  render(){
    return(

      <div className="login_form">
         <form>
          <input value={this.state.username} onChange={this.handleChange} id="top" className="input" type="text" name="username" placeholder="username"/>
          <input value={this.state.password} onChange={this.handleChange} className="input" type="text" name="password" placeholder="password"/>
          <input onClick={this.handleSubmit} value="Log In" className="input" id="submit" type="submit"/>
        </form>
      </div>
      )
  }
}
