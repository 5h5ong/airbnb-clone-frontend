import React from 'react';
import styled from 'styled-components';

interface CalendarGridProps {
  // 해당 월의 첫번째 날의 요일
  firstDay: number;
  // 현재 월의 마지막 날
  lastDate: number;
  // 다음 월의 첫번째 날 요일
  nextFirstDay: number;
  // 다음 월의 마지막 날
  nextLastDate: number;
}

const LootContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 25px;
`;
const GridChild = styled.div`
  display: flex;
  justify-content: center;
`;

const CalendarGrid: React.FC<CalendarGridProps> = ({ firstDay, lastDate }) => {
  return (
    <LootContainer>
      <Grid>
        {/* 요일 */}
        <GridChild>일</GridChild>
        <GridChild>월</GridChild>
        <GridChild>화</GridChild>
        <GridChild>수</GridChild>
        <GridChild>목</GridChild>
        <GridChild>금</GridChild>
        <GridChild>토</GridChild>
        {/* 첫번째 날의 요일을 맞춰주기 위해 빈 div를 삽입 */}
        {[...Array(firstDay).keys()].map(() => (
          <div />
        ))}
        {/* 숫자 삽입 */}
        {[...Array(lastDate).keys()].map((number) => (
          <GridChild>{number + 1}</GridChild>
        ))}
      </Grid>
      <Grid>
        {/* 요일 */}
        <GridChild>일</GridChild>
        <GridChild>월</GridChild>
        <GridChild>화</GridChild>
        <GridChild>수</GridChild>
        <GridChild>목</GridChild>
        <GridChild>금</GridChild>
        <GridChild>토</GridChild>
        {/* 첫번째 날의 요일을 맞춰주기 위해 빈 div를 삽입 */}
        {[...Array(firstDay).keys()].map(() => (
          <div />
        ))}
        {/* 숫자 삽입 */}
        {[...Array(lastDate).keys()].map((number) => (
          <GridChild>{number + 1}</GridChild>
        ))}
      </Grid>
    </LootContainer>
  );
};

export default CalendarGrid;
