import React from 'react';
import styled from 'styled-components';

interface ReservationPresenterProps {
  /** Accommodations ID */
  id: string;
}

const ImageSection = styled.div``;
const ReservationSection = styled.div``;

const ReservationPresenter: React.FC<ReservationPresenterProps> = ({ id }) => {
  return (
    <>
      <div>{id}</div>
      <ImageSection />
      <ReservationSection />
    </>
  );
};

export default ReservationPresenter;
