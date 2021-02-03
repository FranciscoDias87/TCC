import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';

import Container from '@material-ui/core/Container';

import './style.css';
import Copyright from '../../../components/Copyright';
import AuthService from '../../../services/auth.service';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { withRouter } from 'react-router-dom';

import Logo from "../../../assets/img/siglot2.jpg";


class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.onChangeNomeLoterica = this.onChangeNomeLoterica.bind(this);
    this.onChangeCodConvenio = this.onChangeCodConvenio.bind(this);
    this.onChangeCodAgencia = this.onChangeCodAgencia.bind(this);
    this.onChangeNomeAgencia = this.onChangeNomeAgencia.bind(this);
    this.handRegister = this.handRegister.bind(this);

    this.state = {
      nameLoterica: '',
      codConvenio: '',
      codagencia: '',
      nameagencia: '',
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

  onChangeCodAgencia(e) {
    this.setState({
      codagencia: e.target.value
    });
  }

  onChangeNomeAgencia(e) {
    this.setState({
      nameagencia: e.target.value
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
      AuthService.registerLot(
        this.state.nameLoterica,
        this.state.codConvenio,
        this.state.codagencia,
        this.state.nameagencia
      ).then(
        response => {
          this.props.history.push('../../Cadastro/Funcionario');
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
          <Avatar src={Logo} alt='Siglot'>
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
                  autoComplete="codagencia"
                  name="codagencia"
                  variant="outlined"
                  required
                  fullWidth
                  id="codagencia"
                  label="Codigo Agencia"
                  autoFocus
                  value={this.state.codagencia}
                  onChange={this.onChangeCodAgencia}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="nameagencia"
                  name="nameagencia"
                  variant="outlined"
                  required
                  fullWidth
                  id="nameagencia"
                  label="Nome Agência"
                  autoFocus
                  value={this.state.nameagencia}
                  onChange={this.onChangeNomeAgencia}
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
        <Box mt={3}>
          <Copyright />
        </Box>
      </Container >
    );
  }
}

export default withRouter(Cadastro);
