import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Service from "../../services/services.service";

const Home = (props) => {

  const error = '';
  
  const handleClick = () => {
    Service.logout()
    .then(response => {
      props.handleLogout();
    })
    .catch(error => {
      console.log('api errors:', error);
      error: "There was an error";
    });
  }

  return (
    <div className="home">
      {
        !props.loggedInStatus ?
          <div className="header">
            <div className="link">
              <Link to='/login'>Log In</Link>
            </div>
            <div className="link">
              <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        : null
      }
      {
        props.loggedInStatus ?
        <div className="header">
          <div className="link">
            <button onClick={handleClick} className="btn btn-success">
              Logout
            </button>
          </div>
        </div>
        : null
      }
      {
          this.state.errors? this.state.errors : ""
      }

    </div>
  )
}

export default Home;
