import React, { useState } from 'react';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Header from './components/Header';
import NavigationMenuContext from './contexts/NavigationMenuContext';
import UserContext from './contexts/UserContext';
import HoursView from './components/HoursView';
import Home from './components/Home';
import Volunteers from './components/Volunteers';

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
      <Router>
        <NavigationMenuContext.Provider
          value={{ navigationMenuOpen, setNavigationMenuOpen }}
        >
          <UserContext.Provider value={{ user, setUser }}>
            <Header />
          </UserContext.Provider>
          <NavigationMenu />
        </NavigationMenuContext.Provider>

        <Container maxWidth="md" style={{ paddingTop: '76px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hours" component={HoursView} />
            <Route path="/volunteers" component={Volunteers} />
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
