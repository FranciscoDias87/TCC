import React from 'react';
import Typography from '@material-ui/core/Typography';


function Copyright() {
  return (
    <Typography variant='body2' color='textPrimary' align='center'>
      {"Direitos Reservados © "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;