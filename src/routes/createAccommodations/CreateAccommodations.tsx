import React from 'react';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import CreateAccommodationsContainer from './CreateAccommodationsContainer';

const CreateAccommodations = () => {
  return <CreateAccommodationsContainer />;
};

export default WithHeaderPadding(CreateAccommodations);
