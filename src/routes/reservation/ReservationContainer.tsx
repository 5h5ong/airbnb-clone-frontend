import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import ReservationPresenter from './ReservationPresenter';

const ReservationContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAxios<AccommodationsDataType>({
    url: `http://localhost:4000/accommodations/${id}`
  });

  if (!loading && data) {
    return <ReservationPresenter accommodationsData={data} />;
  } else {
    return <div>loading...</div>;
  }
};

export default ReservationContainer;
