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

  registerLot(nameLoterica, codConvenio, codagencia, nameagencia,) {
    return axios
      .post(API_URL + 'signupLot', {
        nameLoterica,
        codConvenio,
        codagencia,
        nameagencia
      });
  }

  registerFunc(nameFuncionario, cpf, matricula, funcao, password) {
    return axios
      .post(API_URL + 'signup', {
        nameFuncionario,
        cpf,
        matricula,
        funcao,
        password
      });
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();