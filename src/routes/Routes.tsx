import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import OnlineExperience from './OnlineExperience';
import Accommodations from './accommodations/Accommodations';
import Reservation from './reservation/Index';
import Login from './login';
import Register from './register';
import Header from '../components/Header/Header';
import Hello from './hello/Hello';
import Dashboard from './dashboard/Dashboard';
import CreateAccommodations from './createAccommodations/CreateAccommodations';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/experiences" component={OnlineExperience} />
      <Route exact path="/accommodations" component={Accommodations} />
      <Route path="/accommodations/create" component={CreateAccommodations} />
      <Route path="/reservation/:id" component={Reservation} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/hello" component={Hello} />
    </BrowserRouter>
  );
};

export default Routes;
