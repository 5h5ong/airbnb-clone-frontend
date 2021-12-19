import React from 'react';
import styled from 'styled-components';

const LootContainer = styled.div`
  /* 최대 width를 고정함 */
  max-width: 1120px;
  /* LootContainer 중앙정렬 */
  margin-left: auto;
  margin-right: auto;
  display: grid;
  align-self: center;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 20px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const DashboardPresenter: React.FC<DashboardProps> = ({
  email,
  accommodations,
  reservations,
}) => {
  return (
    <LootContainer>
      <div>
        <Title>내 정보</Title>
        <div>{email}</div>
      </div>
      <Title>숙소들</Title>
      <Title>예약들</Title>
    </LootContainer>
  );
};

export default DashboardPresenter;
