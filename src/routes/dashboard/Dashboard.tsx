import React from 'react';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import DashboardContainer from './DashboardContainer';

const Dashboard = () => {
  return <DashboardContainer />;
};

export default WithHeaderPadding(Dashboard);
