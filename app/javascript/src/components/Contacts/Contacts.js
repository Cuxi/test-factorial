import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Service from "../../services/services.service";
import ShortContact from '../Contact/ShortContact';
import '../../styles/contacts.module.css';

export default class Contacts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      submitted: ""
    };
    this.gridContacts = <div>Loading...</div>;
  }

  componentDidMount() {
    Service.getAll()
    .then( resp => {
      this.setState({ contacts: resp.data.data });
    })
    .catch(
      error => console.log(error)
    );
  }

  render() {
    this.gridContacts = this.state.contacts && this.state.contacts.length > 0 ?
                          this.state.contacts.map((contact) =>
                            <ShortContact key={contact.id} contact={contact}/>
                          )
                          : <div> There's no contact founded </div>;
    return(
      <div className="home">
        <div className="header">
          <h1>Contacts</h1>
        </div>
        <div className="grid">
          {this.gridContacts}
        </div>
        <div className="link_new">
          <Link to={"/new"}>New Contact</Link>
        </div>
      </div>
    )
  }

}
