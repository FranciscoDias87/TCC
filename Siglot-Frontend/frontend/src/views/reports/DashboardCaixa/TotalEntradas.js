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
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56,
    color: colors.grey
  },
  differenceIcon: {
    color: colors.green[600],
  }
}));

const TotalEntradas = ({ className, ...rest }) => {
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
              Suprimentos
            </Typography>
            <Typography
              color='textPrimary'
              variant='h6'
            >
              R$ 11.000,00
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
          <ArrowUpwardRoundedIcon className={classes.differenceIcon} />
          Entrada no Caixa
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalEntradas;