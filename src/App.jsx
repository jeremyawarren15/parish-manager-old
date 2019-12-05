import React, { useState } from 'react';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NavigationMenu from './components/NavigationMenu';
import Header from './components/Header';
import NavigationMenuContext from './contexts/NavigationMenuContext';
import UserContext from './contexts/UserContext';
import HoursView from './components/HoursView';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://parish-manager-server.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql'
});

const App = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <ApolloProvider client={client}>
      <NavigationMenuContext.Provider
        value={{ navigationMenuOpen, setNavigationMenuOpen }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
        </UserContext.Provider>
        <NavigationMenu />
      </NavigationMenuContext.Provider>

      <Container maxWidth="md">
        <HoursView />
      </Container>
    </ApolloProvider>
  );
};

export default App;
