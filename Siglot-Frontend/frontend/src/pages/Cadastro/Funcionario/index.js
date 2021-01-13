import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';

import Container from '@material-ui/core/Container';

import './style.css';
import Copyright from '../../../components/Copyright';
import AuthService from '../../../services/auth.service';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { withRouter } from 'react-router-dom';



class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.onChangeNomeFuncionario = this.onChangeNomeFuncionario.bind(this);
    this.onChangeCPF = this.onChangeCPF.bind(this);
    this.onChangeMatricula = this.onChangeMatricula.bind(this);
    this.onChangeFuncao = this.onChangeFuncao.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handRegister = this.handRegister.bind(this);

    this.state = {
      nameFuncionario: '',
      cpf: '',
      matricula: '',
      funcao: '',
      password: '',
      message: '',
      successful: false
    }
  }


  onChangeNomeFuncionario(e) {
    this.setState({
      nameFuncionario: e.target.value
    });
  }

  onChangeCPF(e) {
    this.setState({
      cpf: e.target.value
    });
  }

  onChangeMatricula(e) {
    this.setState({
      matricula: e.target.value
    });
  }

  onChangeFuncao(e) {
    this.setState({
      funcao: e.target.value
    })
  }


  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handRegister(e) {
    e.preventDefault();
    const name = e.target.value;
    this.setState({

      [name]: e.target.value,
      message: '',
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.registerFunc(
        this.state.nameFuncionario,
        this.state.cpf,
        this.state.matricula,
        this.state.funcao,
        this.state.password
      ).then(
        response => {//Concertar esta parte
          this.props.history.push('../../Caixa');
          window.location.reload();

          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className='paper'>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro de Funcionario
        </Typography>
          <Form className='form'
            onSubmit={this.handRegister}
            ref={c => {
              this.form = c;
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="funcName"
                  name="nameFuncioario"
                  variant="outlined"
                  required
                  fullWidth
                  id="nameFuncioario"
                  label="Nome da Funcioario"
                  autoFocus
                  onChange={this.onChangeNomeFuncionario}
                  value={this.state.nameFuncionario}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="cpf"
                  name="cpf"
                  variant="outlined"
                  required
                  fullWidth
                  id="cpf"
                  label="CPF"
                  autoFocus
                  value={this.state.cpf}
                  onChange={this.onChangeCPF}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="matricula"
                  name="matricula"
                  variant="outlined"
                  required
                  fullWidth
                  id="matricula"
                  label="Matricula"
                  autoFocus
                  value={this.state.matricula}
                  onChange={this.onChangeMatricula}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="funca"
                  name="funcao"
                  variant="outlined"
                  required
                  fullWidth
                  id="funcao"
                  label="Funcao"
                  autoFocus
                  value={this.state.funcao}
                  onChange={this.onChangeFuncao}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </Grid>
              <Grid item xs={12} >
                {this.state.message && (
                  <Alert variant='filled'  >
                    <div>
                      {this.state.message}
                    </div>
                  </Alert>
                )}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className='submit'
              style={{ margin: '20px 0', padding: '8px' }}
            >
              Cadastrar
            </Button>
            <CheckButton
              style={{ display: 'none' }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            <Grid container justify="flex-end">
              <Grid item>
                {'Ja possui Conta?'}
                <Link href="/" variant="body2">
                  {' Entrar'}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container >
    );
  }
}

export default withRouter(Cadastro);
