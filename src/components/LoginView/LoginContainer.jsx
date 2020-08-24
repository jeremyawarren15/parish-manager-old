import React, { useState, useContext } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
import LoginView from './LoginView';

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, login } = useContext(UserContext);

  const [submitLogin, { loading, error, data }] = useLazyQuery(LOGIN_QUERY, {
    variables: { email, password }
  });

  const handleLogin = e => {
    e.preventDefault();
    submitLogin();
  };

  useEffect(() => {
    if (data) {
      login(data.login.token);
    }
  }, [login, data, token]);

  return (
    <LoginView
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    ></LoginView>
  );
};

export default LoginContainer;
