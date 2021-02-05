import React from 'react';
import Page from '../../../components/Page';
import {

  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,


} from '@material-ui/core';
import FundCaixaAnt from './FundoCaixaAnt';
import Entradas from './Entradas';
import Sangrias from './Sangrias';
import SaldoCaixa from './SaldoCaixa';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }

}));

const Dashboard = () => {
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
            <Entradas />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Sangrias />
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
      <Container maxWidth={false}>
        <Grid
          container
        >
          <Card >
            <CardHeader
              subheader='Informe os valores de entrada no Caixa'
              title='Entradas'
            />
            <Divider />

          </Card>
        </Grid>
      </Container>

    </Page >
  );
};

export default Dashboard;