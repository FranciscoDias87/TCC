//authentication service
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth/';

class AuthService {
  async login(matriculaGerente, password) {
    const response = await axios
      .post(API_URL + 'signin', {
        matriculaGerente,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(nameLoterica, codConvenio, matriculaGerente, password,) {
    return axios.post(API_URL + 'signup', {
      nameLoterica,
      codConvenio,
      matriculaGerente,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();