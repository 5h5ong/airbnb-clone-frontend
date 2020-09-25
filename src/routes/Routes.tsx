import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import OnlineExperience from './OnlineExperience';
import Register from './register/Register';
import Header from '../components/Header/Header';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/experiences" component={OnlineExperience} />
      <Route path="/login" component={OnlineExperience} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
};

export default Routes;
