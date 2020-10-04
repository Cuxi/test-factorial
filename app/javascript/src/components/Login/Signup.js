import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Service from "../../services/services.service";

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      redirect: false,
      user: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    console.log(user);
    Service.createUser(user)
    .then(response => {
      console.log(response)
      if (response.data.jwt != "") {
        this.setState({
          redirect: true,
          user: response.data.user
        });
        this.props.handleLogin(response.data);
      }
    })
    .catch(error => {
      console.log('api errors:', error);
      this.setState({errors: "Unauthorized"});
      }
    );
  }

  render() {
    return (
      <div className="home">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />
          <div className="link">
            {this.state.redirect == true ? <Redirect to='/list' /> : ""}
          </div>

          <button className="btn btn-success" placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default Signup;
