import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './lib/styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Logo from './components/common/Logo';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Logo/>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/temp">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
