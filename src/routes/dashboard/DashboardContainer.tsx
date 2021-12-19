import React from 'react';
import DashboardPresenter from './DashboardPresenter';

const DashboardContainer: React.FC<DashboardProps> = ({
  email,
  accommodations,
  reservations,
}) => {
  return (
    <DashboardPresenter
      email={email}
      accommodations={accommodations}
      reservations={reservations}
    />
  );
};

export default DashboardContainer;
