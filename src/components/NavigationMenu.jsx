import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider
} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import HourGlassFullRoundedIcon from '@material-ui/icons/HourglassFullRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavigationMenuContext from '../contexts/NavigationMenuContext';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

export default function NavigationMenu() {
  const classes = useStyles();
  const { navigationMenuOpen, setNavigationMenuOpen } = useContext(
    NavigationMenuContext
  );

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setNavigationMenuOpen(false);
  };

  return (
    <Drawer open={navigationMenuOpen} onClose={toggleDrawer(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/volunteers" className={classes.link}>
            <ListItem button key="Adorers">
              <ListItemIcon>
                <PeopleAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Adorers" />
            </ListItem>
          </Link>

          <Link to="/hours" className={classes.link}>
            <ListItem button key="Hours">
              <ListItemIcon>
                <HourGlassFullRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Hours" />
            </ListItem>
          </Link>

          <Divider />

          <ListItem button key="Settings">
            <ListItemIcon>
              <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
