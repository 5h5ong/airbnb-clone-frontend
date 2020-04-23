import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import OnlineExperience from './OnlineExperience';
import Header from '../components/Header/Header';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/experiences" component={OnlineExperience} />
    </BrowserRouter>
  );
};

export default Routes;
