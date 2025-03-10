import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Password from './Password';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const ConfigView = () => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title='Configurações'
    >
      <Container maxWidth={false}>
        <Grid
          item
          lg={6}
          sm={6}
          xl={3}
          xs={12}
        >
          <Box mt={3}>
            <Password />
          </Box>
        </Grid>
      </Container>
    </Page>
  );
};

export default ConfigView;