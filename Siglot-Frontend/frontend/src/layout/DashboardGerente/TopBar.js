import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

import Logo from '../../components/Logo';

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest

}) => {
  const [notifications] = useState([]);
  return (

    <AppBar
      className={className}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to='/' >
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color='inherit' >
            <Badge
              badgeContent={notifications.length}
              color='primary'
              variant='dot'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.prototype = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;