import http from "../../http-common"
import React from 'react';

class ServicesDataService {

  login(user) {
    return http.post('/login', {user}, {withCredentials: true});
  }

  logout() {
    return http.delete('/logout', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }}
    );
  }

  createUser(user) {
    return http.post('/users', {user}, {withCredentials: true});
  }

  getAll() {
    return http.get('/contacts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }}
    );
  }

  get(email) {
    return http.get('/contacts/show', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      },
      params: {
        email: email
      }
    });
  }

  create(data) {
    return http.post('/contacts', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }}
    );
  }

  update(data) {
    return http.put('/contacts/contact', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }}
    );
  }

  delete(email) {
    return http.delete('/contacts/delete', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      },
      params: {
        email: email
      }
    });
  }
}

export default new ServicesDataService();
