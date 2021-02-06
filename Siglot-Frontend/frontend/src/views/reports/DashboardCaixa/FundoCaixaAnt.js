import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  colors,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/LocalAtm';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.yellow[900],
    height: 56,
    width: 56,
    color: colors.grey
  },
  differenceIcon: {
    color: colors.yellow[900]
  }
}));

const FundCaixaAnt = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify='space-between'
          spacing={3}
        >
          <Grid item>
            <Typography
              color='textSecondary'
              gutterBottom
              variant='h7'
            >
              Fundo de Caixa
            </Typography>
            <Typography
              color='textPrimary'
              variant='h6'
            >
              R$ 17.000,00
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={3}
          display='flex'
          alignItems='center'
        >
          <ViewDayIcon className={classes.differenceIcon} />
          Caixa dia anterior
        </Box>
      </CardContent>
    </Card>
  );
};

export default FundCaixaAnt;