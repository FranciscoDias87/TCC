import React, { useState } from 'react';

import NavBar from './NavBar';
import TopBar from './TopBar';
import useStyles from './style';

import Dashboard from '../../views/usuario/UsuarioCaixaview';


const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;