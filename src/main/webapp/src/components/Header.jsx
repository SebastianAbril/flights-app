import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import theme from './Theme';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Typography } from '@mui/material';

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em'
  },
  logo: {
    ...theme.typography.logo,
    marginBottom: '3em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    color: 'white',
    minWidth: '10px',
    marginLeft: '25px',
    fontSize: '1rem'
  }
};

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}
export default function Header() {
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <FlightTakeoffIcon fontSize="large" sx={{ marginRight: '10px' }} />
            <Typography sx={{ fontSize: '1rem' }}>FLIGHTS-APP</Typography>
            <Tabs sx={styles.tabContainer} value={0}>
              <Tab sx={styles.tab} label="Home" />
              <Tab sx={styles.tab} label="Services" />
              <Tab sx={styles.tab} label="FAQ" />
              <Tab sx={styles.tab} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar sx={styles.toolbarMargin} />
    </>
  );
}
