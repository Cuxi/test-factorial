import React from 'react';
import axios from "axios";

export default axios.create({
  baseURL: "https://test-factorial.herokuapp.com/api/v1",
  headers: {
    "Content-type": "application/json",
    'X-CSRF-TOKEN': `${localStorage.getItem('csrf')}`,
    "Authorization": `Bearer ${localStorage.getItem('userToken')}`
  }
});
