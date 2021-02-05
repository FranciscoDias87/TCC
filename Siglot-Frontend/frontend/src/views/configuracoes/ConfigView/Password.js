import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, makeStyles, TextField } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles(({
  root: {}
}));

const Password = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader='Atualizar Senha'
          title='Senha'
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label='Password'
            margin='normal'
            name='password'
            onChange={handleChange}
            value={values.passaword}
            type='password'
            variant='outlined'
          />
          <TextField
            fullWidth
            label='Confirma senha'
            margin='normal'
            name='confirm'
            onChange={handleChange}
            type='password'
            value={values.confirm}
            variant='outlined'
          />
        </CardContent>
        <Divider />
        <Box
          display='flex'
          justifyContent='flex-end'
          p={2}
        >
          <Button
            color='primary'
            variant='contained'
          >
            ATUALIZAR
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default Password;