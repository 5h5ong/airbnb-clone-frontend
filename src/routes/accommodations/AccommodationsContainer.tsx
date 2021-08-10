import React from 'react';
import useAxios from '../../hooks/useAxios';
import AccommodationsPresenter from './AccommodationsPresenter';

const AccommodationsContainer: React.FC = () => {
  const { loading, error, data } = useAxios({
    url: 'http://localhost:4000/accommodations',
  });

  return loading ? (
    <div>'loading...'</div>
  ) : (
    <AccommodationsPresenter accommodationsData={data} />
  );
};

export default AccommodationsContainer;
