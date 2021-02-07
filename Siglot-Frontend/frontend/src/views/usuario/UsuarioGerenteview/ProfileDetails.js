import React, { useState } from 'react';
import {

  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  TextField,

} from '@material-ui/core';
import clsx from 'clsx';
import ProtoTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Ligia Maria',
    lastName: 'Dias',
    matricula: 'L489090',
    phone: '',
    cpf: '',
    funcao: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete='off'
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader='As informações Podem ser editadas'
          title='Perfil'
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText='Digite o primeiro nome'
                label="Primeiro Nome"
                name='firsName'
                onChange={handleChange}
                required
                value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Sobrenome"
                name='lastName'
                onChange={handleChange}
                required
                value={values.lastName}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Matricula"
                name='matricula'
                onChange={handleChange}
                required
                value={values.matricula}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="CPF"
                name='cpf'
                onChange={handleChange}
                required
                value={values.cpf}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Funcao"
                name='funcao'
                onChange={handleChange}
                required
                value={values.funcao}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefone"
                name='phone'
                onChange={handleChange}
                required
                type='number'
                value={values.phone}
                variant='outlined'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color='primary'
            variant='contained'
          >
            SALVAR
              </Button>
        </Box>
      </Card>

    </form >
  );
};

ProfileDetails.protoTypes = {
  className: ProtoTypes.string
};

export default ProfileDetails;