import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import OnlineExperience from './OnlineExperience';
import Accommodations from './accommodations/Index';
import Reservation from './reservation/Index';
import Login from './login';
import Register from './register';
import Header from '../components/Header/Header';
import Hello from './hello/Hello';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/experiences" component={OnlineExperience} />
      <Route path="/accommodations" component={Accommodations} />
      <Route path="/reservation/:id" component={Reservation} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/hello" component={Hello} />
    </BrowserRouter>
  );
};

export default Routes;
