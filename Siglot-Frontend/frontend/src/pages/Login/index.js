import React, { Component } from 'react';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../Login/style.css';
import Copyright from '../../components/Copyright';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button"
import { Alert } from '@material-ui/lab';
import { withRouter } from 'react-router-dom';

import AuthService from '../../services/auth.service';


class Home extends Component {
  constructor(props) {
    super(props);
    this.handlerLogin = this.handlerLogin.bind(this);
    this.onChangeMatricula = this.onChangeMatricula.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      matricula: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeMatricula(e) {
    this.setState({
      matricula: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }


  handlerLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.matricula, this.state.password).then(
        () => {
          if (AuthService.getCurrentUser === 'Gerente') {
            this.props.history.push('../../Gerente');
            window.location.reload();
          } else {
            this.props.history.push('../../Caixa');
            window.location.reload();
          }
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className='paper'>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bem vindo ao Siglot
        </Typography>
          <Typography component="h1" variant="h5" >
            Entrar
        </Typography>
          <Form className='form'
            onSubmit={this.handlerLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="matricula"
              label="Matricula"
              name="matricula"
              autoComplete="matricula"
              autoFocus
              type='text'
              value={this.state.matricula}
              onChange={this.onChangeMatricula}
            />

            <TextField
              variant="outlined"
              margin="normal"
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

            <Grid item xs={12} >
              {this.state.message && (
                <Alert variant='filled'  >
                  <div>
                    {this.state.message}
                  </div>
                </Alert>
              )}
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className='submit'
            >
              {this.state.loading && (
                <span  ></span>
              )}
              Entrar
          </Button>

            < CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            <Grid container style={{ margin: '20px 0' }}>
              <Grid item xs >
                <Link href="#" variant="body2">
                  {'Esqueceu a Senha?'}
                </Link>
              </Grid>
              <Grid item >
                <Link href='../../Cadastro/Loterica' variant="body2" >
                  Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Form>
        </div>
        <Box mt={6}>
          <Copyright />
        </Box>
      </Container>
    );

  }
}

export default withRouter(Home);


