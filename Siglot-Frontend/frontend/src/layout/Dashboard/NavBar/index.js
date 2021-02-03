import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Divider,
  Hidden,
  List,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon

} from 'react-feather'

import NavItem from './NavItem';

const user = {
  avatar: "S",
  jotTitle: 'SeniorDeveloper',
  name: 'Francisco'
}

const items = [
  {
    href: 'www.globo.com.br',
    icon: BarChartIcon,
    title: 'DashBoard'
  }
]

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));



const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  })

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={3.5}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >

          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >

          {user.jotTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>

  );


  return (
    <>
      <Hidden lgUp>
        {content}
      </Hidden>

    </>
  );
};

export default NavBar;