import React, { useContext } from 'react';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
  const { token, logout } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
          {token ? (
            <Button color="inherit" onClick={() => logout()}>
              Log Out
            </Button>
          ) : (
            // There has to be a better way to do this
            // but I don't have time to look. It is working
            // right now. But it won't log out on the login
            // page for some reason.
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button color="inherit">Log In</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
