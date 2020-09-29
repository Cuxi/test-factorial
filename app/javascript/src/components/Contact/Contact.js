import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Service from "../../services/services.service";
import '../../styles/contacts.module.css';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      email_param: this.props.match.params.email,
      edit: (this.props.match.path.match(/edit/g)) ? "required" : false,
      disabled: (this.props.match.path.match(/edit/g)) ? false : "disabled",
      submitted: "",
      textSubmit: ""
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  componentDidMount() {
    Service.get(this.state.email_param)
    .then( resp => {
      this.setState({ contact: resp.data.data });
    })
    .catch(
      resp => console.log(resp)
    )
  }

  onChangeFirstName(e) {
    let obj = this.state.contact;
    obj.attributes.first_name = e.target.value;
    this.setState({contact: obj});
  }

  onChangeLastName(e) {
    let obj = this.state.contact;
    obj.attributes.last_name = e.target.value;
    this.setState({contact: obj});
  }

  onChangePhone(e) {
    let obj = this.state.contact;
    obj.attributes.phone = e.target.value;
    this.setState({contact: obj});
  }

  onChangeEmail(e) {
    let obj = this.state.contact;
    obj.attributes.email = e.target.value;
    this.setState({contact: obj});
  }

  deleteContact() {
    Service.delete(this.state.email_param)
    .then(response => {
      this.setState({
        submitted: true,
        textSubmit: "Contact has been deleted correctly"
      });
      console.log(response);
    })
    .catch(e => {
      this.setState({
        submitted: false,
        textSubmit: "There was an error deleting the contact"
      });
      console.log(e);
    });

  }

  saveContact() {
    var data = {
      first_name: this.state.contact.attributes.first_name,
      last_name: this.state.contact.attributes.last_name,
      phone: this.state.contact.attributes.phone,
      email: this.state.contact.attributes.email
    };
    Service.update(data)
    .then(response => {
      this.setState({
        contact: response.data.data,
        submitted: true,
        textSubmit: "Contact has been saved correctly"
      });
      console.log(response.data)
    })
    .catch(error => {
      this.setState({
        submitted: false,
        textSubmit: "There was an error saving the contact"
      });
      console.log(error)
    })
  }

  render() {
    const buttonSave = this.state.edit == "required" ?
                        <button onClick={this.saveContact} className="btn btn-success" disabled={this.state.disabled}>
                          Submit
                        </button>
                        : "";
    const buttonDelete = !this.state.edit ?
                        <button onClick={this.deleteContact} className="btn btn-success">
                          Delete Contact
                        </button>
                        : "";
    return(
      <div className="home">
        <div className="header">
          <h1>Contact</h1>
        </div>
        {
          this.state.contact && ('attributes' in this.state.contact) ?
          <div key={this.state.contact} className="card">
            <div className="first_name form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" className="form-control" id="first_name"
              value={this.state.contact.attributes.first_name}
              onChange={this.onChangeFirstName} name="first_name" required={this.state.edit} disabled={this.state.disabled}/>
            </div>
            <div className="last_name form-group">
              <label htmlFor="title">Last Name</label>
              <input type="text" className="form-control" id="last_name"
              value={this.state.contact.attributes.last_name}
              onChange={this.onChangeLastName} name="last_name" required={this.state.edit} disabled={this.state.disabled}/>
            </div>
            <div className="phone form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="last_name"
              value={this.state.contact.attributes.phone}
              onChange={this.onChangePhone} name="phone" required={this.state.edit} disabled={this.state.disabled}/>
            </div>
            <div className="email form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email"
              value={this.state.contact.attributes.email}
              onChange={this.onChangeEmail} name="email" required={this.state.edit} disabled={this.state.disabled}/>
            </div>
            <div className="button_save">{buttonSave}</div>
            <div>
              {this.state.textSubmit}
            </div>
            <div>
              {buttonDelete}
            </div>
            <div className="link_list">
              <Link to={"/"}>List Contacts</Link>
            </div>
          </div>
          :
          <div>
            <div>There's no contact founded</div>
            <div className="link_list">
              <Link to={"/"}>List Contacts</Link>
            </div>
          </div>
        }
      </div>
    )
  }
}
