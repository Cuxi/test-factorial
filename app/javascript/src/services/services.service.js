import http from "../../http-common";
import React from 'react';


class ServicesDataService {

  login(user) {
    return http.post('/login', {user});
  }

  logout() {
    return http.delete('/logout');
  }

  createUser(user) {
    return http.post('/users', {user});
  }

  getAll() {
    return http.get('/contacts');
  }

  get(email) {
    return http.get('/contacts/show', {
      params: {
        email: email
      }
    });
  }

  create(data) {
    return http.post('/contacts', data);
  }

  update(data) {
    return http.put('/contacts/contact', data);
  }

  delete(email) {
    return http.delete('/contacts/delete', {
      params: {
        email: email
      }
    });
  }
}

export default new ServicesDataService();
