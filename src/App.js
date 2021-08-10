import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './routes/';
import LoginPage from './routes/LoginPage';
import SignUpPage from './routes/SignUpPage';
import FormTemplatePage from './routes/FormTemplatePage';
import AppGalleryPage from './routes/AppGalleryPage';

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
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/app-gallery" component={AppGalleryPage} />
        <Route path="/form-template" component={FormTemplatePage} />
      </Switch>
    </Router>
  );
}

export default App;
