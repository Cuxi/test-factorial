import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Service from "../../services/services.service";
import '../../styles/contacts.module.css';

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
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  onChangeFirstName(e) {
    this.setState({first_name: e.target.value});
  }

  onChangeLastName(e) {
    this.setState({last_name: e.target.value});
  }

  onChangePhone(e) {
    this.setState({phone: e.target.value});
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
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
        contact: response.data.data,
        submitted: true,
        textSubmit: "Contact has been saved correctly"
      });
      console.log(response.data);
    })
    .catch(e => {
      this.setState({
        submitted: false,
        textSubmit: "There was an error saving the contact"
      })
      console.log(e);
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
            onChange={this.onChangeFirstName} name="first_name" required/>
          </div>
          <div className="last_name form-group">
            <label htmlFor="title">Last Name</label>
            <input type="text" className="form-control" id="last_name"
            value={this.state.last_name}
            onChange={this.onChangeLastName} name="last_name" required/>
          </div>
          <div className="phone form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="last_name"
            value={this.state.phone}
            onChange={this.onChangePhone} name="phone" required/>
          </div>
          <div className="email form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email"
            value={this.state.email}
            onChange={this.onChangeEmail} name="email" required/>
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
            <Link to={"/"}>List Contacts</Link>
          </div>
        </div>
      </div>
    )

  }
}
