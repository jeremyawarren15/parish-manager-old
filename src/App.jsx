import React, { useState } from 'react';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Header from './components/Header';
import NavigationMenuContext from './contexts/NavigationMenuContext';
import UserContext from './contexts/UserContext';
import HoursViewContainer from './components/HoursView/HoursViewContainer';
import LoginContainer from './components/LoginView/LoginContainer';
import Home from './pages/Home';
import VolunteersContainer from './components/VolunteersView/VolunteersContainer';

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://parish-manager-server.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql'
});

const App = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const login = loginToken => {
    setToken(loginToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={{ token, userId, login, logout }}>
        <Router>
          <NavigationMenuContext.Provider
            value={{ navigationMenuOpen, setNavigationMenuOpen }}
          >
            <Header />
            <NavigationMenu />
          </NavigationMenuContext.Provider>

          <Container maxWidth="md" style={{ paddingTop: '76px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/hours" component={HoursViewContainer} />
              <Route path="/volunteers" component={VolunteersContainer} />
              <Route path="/login" component={LoginContainer} />
            </Switch>
          </Container>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
};

export default App;
