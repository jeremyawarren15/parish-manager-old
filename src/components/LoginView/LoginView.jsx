import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const LoginView = ({ handleLogin, setPassword, setEmail }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleLogin}>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          id="my-input"
          onChange={e => setEmail(e.target.value)}
          aria-describedby="Username"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          id="my-input"
          onChange={e => setPassword(e.target.value)}
          aria-describedby="Password"
        />
      </FormControl>

      <Button type="submit" color="primary">
        Log In
      </Button>
    </form>
  );
};

export default LoginView;
