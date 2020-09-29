import http from "../../http-common"

class ServicesDataService {
  getAll() {
    return http.get('/contacts.json');
  }

  get(email) {
    return http.get('/contacts/contact.json', {
      params: {
        email: email
      }
    });
  }

  create(data) {
    return http.post('/contacts.json', data);
  }

  update(data) {
    return http.put('/contacts/contact.json', data);
  }

  delete(email) {
    return http.delete('/contacts/contact.json', {
      params: {
        email: email
      }
    });
  }
}

export default new ServicesDataService();
