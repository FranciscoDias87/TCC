//authentication service
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(matricula, password) {
    return axios
      .post(API_URL + 'signin', {
        matricula,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(nameLoterica, codConvenio, matricula, password,) {
    return axios
      .post(API_URL + 'signup', {
        nameLoterica,
        codConvenio,
        matricula,
        password
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();