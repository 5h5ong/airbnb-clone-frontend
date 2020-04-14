import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from '../components/Header/Header';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
