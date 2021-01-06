import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadLoterica from './pages/Cadastro/Loterica';
import CadFuncionario from './pages/Cadastro/Funcionario';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Gerente from './pages/Gerente';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/cadastro/loterica' component={CadLoterica} />
      <Route exact path='/cadastro/funcionario' component={CadFuncionario} />
      <Route exact path='/gerente' component={Gerente} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
