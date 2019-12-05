import React, { useContext } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import NavigationMenuContext from '../contexts/NavigationMenuContext';
import UserContext from '../contexts/UserContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '15px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const { setNavigationMenuOpen } = useContext(NavigationMenuContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setNavigationMenuOpen(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Parish Manager
          </Typography>
          {user ? (
            <Button color="inherit" onClick={() => setUser(null)}>
              Log Out,&nbsp;
              {user}
            </Button>
          ) : (
            <Button onClick={() => setUser('Jeremy')} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
