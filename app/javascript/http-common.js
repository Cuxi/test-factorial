import React from 'react';
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
    'X-CSRF-TOKEN': `${localStorage.getItem('csrf')}`,
    "Authorization": `Bearer ${localStorage.getItem('userToken')}`
  }
});
