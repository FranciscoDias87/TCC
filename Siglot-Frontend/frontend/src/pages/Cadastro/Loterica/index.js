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



import Container from '@material-ui/core/Container';

import './style.css';
import Copyright from '../../../components/Copyright';
import AuthService from '../../../services/auth.service';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";



export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.onChangeNomeLoterica = this.onChangeNomeLoterica.bind(this);
    this.onChangeCodConvenio = this.onChangeCodConvenio.bind(this);
    this.onChangeMatricula = this.onChangeMatricula.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handRegister = this.handRegister.bind(this);

    this.state = {
      nameLoterica: '',
      codConvenio: '',
      matricula: '',
      password: '',
      message: '',
      successful: false
    }
  }

  onChangeNomeLoterica(e) {
    this.setState({
      nameLoterica: e.target.value
    });
  }

  onChangeCodConvenio(e) {
    this.setState({
      codConvenio: e.target.value
    });
  }

  onChangeMatricula(e) {
    this.setState({
      matricula: e.target.value
    });
  }


  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handRegister(e) {
    e.preventDefault();

    this.setState({
      message: '',
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.nameLoterica,
        this.state.codConvenio,
        this.state.matricula,
        this.state.password
      ).then(
        response => {
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
            Cadastro da Loterica
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
                  autoComplete="lotName"
                  name="nameLoterica"
                  variant="outlined"
                  required
                  fullWidth
                  id="nameLoterica"
                  label="Nome da Loterica"
                  autoFocus
                  onChange={this.onChangeNomeLoterica}
                  value={this.state.nameLoterica}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="codconvenio"
                  name="convenio"
                  variant="outlined"
                  required
                  fullWidth
                  id="codConvenio"
                  label="Codigo Convenio"
                  autoFocus
                  value={this.state.codConvenio}
                  onChange={this.onChangeCodConvenio}
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
                  {' Logar'}
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

