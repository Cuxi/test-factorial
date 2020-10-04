import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../src/components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
});
