import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../styles/contacts.module.css';

const ShortContact = (props) => {
  const contact = props.contact;
    return(
      <div>
      {
        <div className="card">
          <div className="first_name">
            {contact.attributes.first_name}
          </div>
          <div className="last_name">
            {contact.attributes.last_name}
          </div>
          <div className="link_view_email">
            <Link to={"/" + contact.attributes.email}>View Contact</Link>
          </div>
          <div className="link_set_email">
            <Link to={"/edit" + "/" + contact.attributes.email}>Edit Contact</Link>
          </div>
        </div>
      }
      </div>
    );
}

export default ShortContact;
