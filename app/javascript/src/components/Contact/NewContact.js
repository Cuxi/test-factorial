import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Service from "../../services/services.service";

export default class NewContact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contact: [],
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      submitted: "",
      textSubmit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  saveContact() {
    var data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email
    };
    Service.create(data)
    .then(response => {
      this.setState({
        contact: response.data.contact,
        submitted: true,
        textSubmit: "Contact has been saved correctly"
      });
    })
    .catch(error => {
      console.log('api errors:', error);
      this.setState({
        submitted: false,
        textSubmit: "There was an error saving the contact"
      });
    });
  }

  render() {
    return(
      <div className="home">
        <div className="header">
          <h1>New Contact</h1>
        </div>
        <div className="card">
          <div className="last_name form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" id="first_name"
            value={this.state.first_name}
            onChange={this.handleChange} name="first_name" required/>
          </div>
          <div className="last_name form-group">
            <label htmlFor="title">Last Name</label>
            <input type="text" className="form-control" id="last_name"
            value={this.state.last_name}
            onChange={this.handleChange} name="last_name" required/>
          </div>
          <div className="phone form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="last_name"
            value={this.state.phone}
            onChange={this.handleChange} name="phone" required/>
          </div>
          <div className="email form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email"
            value={this.state.email}
            onChange={this.handleChange} name="email" required/>
          </div>
          <div className="button_save">
            <button onClick={this.saveContact} className="btn btn-success">
              Submit
            </button>
          </div>
          <div>
            {this.state.textSubmit}
          </div>
          <div className="link_list">
            <Link to='/list'>List Contacts</Link>
          </div>
        </div>
      </div>
    )

  }
}
