import React from 'react';
import { useParams } from 'react-router-dom';
import ReservationPresenter from './ReservationPresenter';

const ReservationContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id) {
    return <ReservationPresenter id={id} />;
  } else {
    return <div>loading...</div>;
  }
};

export default ReservationContainer;
