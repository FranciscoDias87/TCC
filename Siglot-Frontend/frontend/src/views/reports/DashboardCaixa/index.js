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
import FundCaixaAnt from './FundoCaixaAnt';
import TotalEntradas from './TotalEntradas';
import TotalSangrias from './TotalSangrias';
import SaldoCaixa from './SaldoCaixa';
import Saidas from './Saidas';
import Entradas from './Entradas';


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
            <FundCaixaAnt />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalEntradas />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalSangrias />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <SaldoCaixa />
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={9}
            xl={3}
            xs={12}
          >
            <Entradas />
          </Grid>
          <Grid
            item
            lg={6}
            sm={9}
            xl={3}
            xs={12}
          >
            <Saidas />
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