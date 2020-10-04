import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Service from "../../services/services.service";
import ShortContact from '../Contact/ShortContact';

export default class Contacts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      submitted: "",
      errors: ''
    };
    this.gridContacts = <div>Loading...</div>;
  }

  componentDidMount() {
    Service.getAll()
    .then( resp => {
      this.setState({ contacts: resp.data.contacts });
    })
    .catch(error => {
      console.log('api errors:', error);
      this.setState({errors: "Nothing found"});
    }
    );
  }

  render() {
    this.gridContacts = this.state.contacts && this.state.contacts.length > 0 ?
                          this.state.contacts.map((contact) =>
                            <ShortContact key={contact.id} contact={contact} />
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
        <div>
        {
            this.state.errors? this.state.errors : ""
        }
        </div>
        <div className="link_new">
          <Link to='/new'>New Contact</Link>
        </div>
        <div className="link">
          <Link to='/'>Home</Link>
        </div>
      </div>
    )
  }

}
