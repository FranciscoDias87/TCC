//data service
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(`${API_URL}all`);
  }

  getUserBoard() {
    return axios.get(`${API_URL}user`, {
      headers: authHeader()
    });
  }

  getModeratorBoard() {
    return axios.get(`${API_URL}mod`, {
      headers: authHeader()
    });
  }

  getAdminBoard() {
    return axios.get(`${API_URL}admin`, {
      headers: authHeader()
    });
  }

  getGerenteBoard() {
    return axios.get(`${API_URL}Gerente`, {
      headers: authHeader()
    });
  }

  getCaixaBoard() {
    return axios.get(`${API_URL}Caixa`, {
      headers: authHeader()
    });
  }

}

export default new UserService();
