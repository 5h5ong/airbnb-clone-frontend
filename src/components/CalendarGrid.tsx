import React from 'react';
import styled from 'styled-components';

interface CalendarGridProps {
  // 왼쪽 달력의 state
  leftCalendarState: CalendarDefaultStateType;
  // 왼쪽 달력의 dispatch
  leftCalendarDispatch: React.Dispatch<CalendarAction>;
  // 오른쪽 달력의 state
  rightCalendarState: CalendarDefaultStateType;
  // 오른쪽 달력의 dispatch
  rightCalendarDispatch: React.Dispatch<CalendarAction>;
  // 요일 선택 처리 함수
  dateSelectOnClick: (date: number) => void;
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
  z-index: 100;
  justify-content: center;
`;

const CalendarGrid: React.FC<CalendarGridProps> = ({
  leftCalendarState,
  rightCalendarState,
  dateSelectOnClick,
}) => {
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
        {[...Array(leftCalendarState.firstDay).keys()].map(() => (
          <div />
        ))}
        {/* 숫자 삽입 */}
        {[...Array(leftCalendarState.lastDate).keys()].map((number) => (
          <GridChild onClick={() => dateSelectOnClick(number + 1)}>
            {number + 1}
          </GridChild>
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
        {[...Array(rightCalendarState.firstDay).keys()].map(() => (
          <div />
        ))}
        {/* 숫자 삽입 */}
        {[...Array(rightCalendarState.lastDate).keys()].map((number) => (
          <GridChild onClick={() => dateSelectOnClick(number + 1)}>
            {number + 1}
          </GridChild>
        ))}
      </Grid>
    </LootContainer>
  );
};

export default CalendarGrid;
