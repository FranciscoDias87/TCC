import React from 'react';
import Page from '../../../components/Page';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';

import Saldo043 from './Saldo043';
import SaldoCaixa003 from './SaldoCaixa003';
import TotalCaixas from './TotalCaixas';
import Diferenca from './Diferencas';
import LatestOrders from './ValoresCaixasInd';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const DashboardCaixa = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title='Dasboard'
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Saldo043 />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <SaldoCaixa003 />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCaixas />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Diferenca />
          </Grid>
        </Grid>
      </Container>
      <br></br>

      <br></br>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={8}
            sm={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >

          </Grid>
        </Grid>

        <Container>
          <Grid
            container
            spacing={3}
          >
            <Divider />
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
            >
              <Box
                display='flex'
                justifyContent='center'
              >
                <Button
                  color='primary'
                  variant='contained'
                >
                  SAIR
            </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Page >
  );
};

export default DashboardCaixa;