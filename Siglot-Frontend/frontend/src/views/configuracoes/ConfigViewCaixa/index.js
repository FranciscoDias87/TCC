import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Password from './Password';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
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
      <Container maxWidth='lg'>
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  );
};

export default ConfigView;