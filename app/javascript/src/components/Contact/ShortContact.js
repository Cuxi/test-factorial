import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ShortContact = (props) => {
  const contact = props.contact;
    return(
      <div>
      {
        <div className="card">
          <div className="first_name">
            {contact.first_name}
          </div>
          <div className="last_name">
            {contact.last_name}
          </div>
          <div className="link_view_email">
            <Link to={'/' + contact.email}>View Contact</Link>
          </div>
          <div className="link_set_email">
            <Link to={'/edit/' + contact.email}>Edit Contact</Link>
          </div>
        </div>
      }
      </div>
    );
}

export default ShortContact;
