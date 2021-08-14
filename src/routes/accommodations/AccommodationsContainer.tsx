import React from 'react';
import useAxios from '../../hooks/useAxios';
import useDeviceHeight from '../../hooks/useDeviceHeight';
import AccommodationsPresenter from './AccommodationsPresenter';

const AccommodationsContainer: React.FC = () => {
  const { loading, error, data } = useAxios({
    url: 'http://localhost:4000/accommodations',
  });
  const { height } = useDeviceHeight();

  return loading ? (
    <div>'loading...'</div>
  ) : (
    <AccommodationsPresenter accommodationsData={data} displayHeight={height} />
  );
};

export default AccommodationsContainer;
