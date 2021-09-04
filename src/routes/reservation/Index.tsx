import React from 'react';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import ReservationContainer from './ReservationContainer';

const Index: React.FC = () => {
  return <ReservationContainer />;
};

export default WithHeaderPadding(Index);
