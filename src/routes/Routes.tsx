import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
