import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container, Divider, Grid, Input, InputAdornment, InputLabel, TextField
} from '@material-ui/core';

const selSaida = [
  {
    valor: 'Transferencia',
    label: 'Transferencia'
  },
  {
    valor: 'Fatura Energia',
    label: 'Fatura Energia'
  },
  {
    valor: 'Fatura Agua',
    label: 'Fatura Agua'
  },
  {
    valor: 'Loja Basico',
    label: 'Loja Basico'
  },
];



function Saidas() {

  const [values, setValues] = useState({
    selSaida: '',
    selSaida2: '',
    valor: '',
    valor2: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Container
      maxWidth={false}
    >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          sm={12}
          xl={3}
          xs={12}
        >
          <Grid >
            <Card>
              <CardHeader
                subheader='Informe o valor das saidas'
                title='Saidas'
              />
              <Divider />
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label='Selecione'
                      name='selSaida'
                      onChange={handleChange}
                      required
                      select
                      SelectProps={{ native: true }}
                      value={values.selSaida}
                      variant='outlined'
                    >
                      {selSaida.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <InputLabel htmlFor="valor"
                    >
                      Valor
                    </InputLabel>
                    <Input
                      fullWidth
                      id="valor"
                      name="valor"
                      onChange={handleChange}
                      value={values.valor}
                      required
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label='Selecione'
                      name='selSaida2'
                      onChange={handleChange}
                      required
                      select
                      SelectProps={{ native: true }}
                      value={values.selSaida2}
                      variant='outlined'
                    >
                      {selSaida.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <InputLabel
                      htmlFor="valor2"
                    >
                      Valor
                    </InputLabel>
                    <Input
                      fullWidth
                      id="valor"
                      name="valor2"
                      onChange={handleChange}
                      value={values.valor2}
                      required
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                  </Grid>
                </Grid>
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
                  Salvar
                  </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Saidas;