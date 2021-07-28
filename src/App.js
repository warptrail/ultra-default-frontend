import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './routes/';
import SignInPage from './routes/SignInPage';
import SignUpPage from './routes/SignUpPage';

function App() {
  // const { pathname, hash } = useLocation();

  // state for the main menu being open in mobile
  const [isNavOpen, setIsNavOpen] = useState(false);

  // toggle state function
  const toggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // TODO Combine Nav and Sidebar into header with dynamic Link
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isNavOpen={isNavOpen} toggle={toggle} />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
