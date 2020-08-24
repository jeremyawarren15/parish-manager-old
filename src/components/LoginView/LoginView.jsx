import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

const LoginView = ({ handleLogin, setPassword, setEmail }) => {
  return (
    <form onSubmit={handleLogin}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          marginBottom: '30px'
        }}
      >
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
            type="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            aria-describedby="Password"
          />
        </FormControl>
      </div>

      <Button type="submit" color="primary">
        Log In
      </Button>
    </form>
  );
};

export default LoginView;
