import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import LoginPage from './pages/LoginPage';
import GlobalStyle from './lib/styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
