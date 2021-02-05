import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core';
import moment from 'moment';

const user = {
  avatar: 'S',
  jobTitle: 'Caixa',
  name: 'Francisco',
  timezone: 'GTM-3'

};


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));


const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color='textPrimary'
            gutterBottom
            variant='h4'
          >
            {user.name}
          </Typography>
          <Typography
            color='textSecondary'
            variant='body1'
          >
            {user.jobTitle}
          </Typography>
          <Typography
            className={classes.dateText}
            color='textSecondary'
            variant='body1'
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color='primary'
          fullWidth
          variant='text'
        >
          Upload da foto
        </Button>
      </CardActions>
    </Card>
  );
}

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;