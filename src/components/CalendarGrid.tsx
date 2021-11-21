import React from 'react';
import styled from 'styled-components';

type TodaysType = {
  year: number;
  month: number;
  date: number;
};

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
  // 오늘 날짜의 정보
  todays: TodaysType;
}

const LootContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr;
  /* Grid가 정렬되는 방식을 정해줄 수 있음 */
  grid-auto-flow: column;
  grid-column-gap: 30px;
`;
const MidiumText = styled.span`
  flex: 1;
  justify-self: center;
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
const GridChildGray = styled(GridChild)`
  color: gray;
`;

const CalendarGrid: React.FC<CalendarGridProps> = ({
  leftCalendarState,
  rightCalendarState,
  dateSelectOnClick,
  todays,
}) => {
  return (
    <LootContainer>
      {/* Date 객체는 값이 0부터 시작하기 때문에 1을 더해줘야 현재의 날짜와 일치함 */}
      <MidiumText>{leftCalendarState.month + 1}월</MidiumText>
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
        {/* Array 객체는 0부터 시작하기에 주의해야 함. */}
        {[...Array(leftCalendarState.lastDate).keys()].map((number) => {
          // 오늘 날의 년과 월이 맞는다면 오늘 날 이전을 회색으로 만들고 onclick 이벤트가 발생하지 않게 만듬
          if (todays.year === leftCalendarState.year) {
            if (todays.month === leftCalendarState.month) {
              {
                /* number+1 값이 실제 날짜임. 0부터 시작해서 발생하는 문제임. */
                if (todays.date > number + 1) {
                  return <GridChildGray>{number + 1}</GridChildGray>;
                }
              }
            }
          }
          return (
            <GridChild onClick={() => dateSelectOnClick(number + 1)}>
              {number + 1}
            </GridChild>
          );
        })}
      </Grid>
      <MidiumText>{rightCalendarState.month + 1}월</MidiumText>
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
        {[...Array(rightCalendarState.lastDate).keys()].map((number) => {
          // 오늘 날의 년과 월이 맞는다면 오늘 날 이전을 회색으로 만들고 onclick 이벤트가 발생하지 않게 만듬
          if (todays.year === rightCalendarState.year) {
            if (todays.month === rightCalendarState.month) {
              {
                /* number+1 값이 실제 날짜임. 0부터 시작해서 발생하는 문제임. */
                if (todays.date > number + 1) {
                  return <GridChildGray>{number + 1}</GridChildGray>;
                }
              }
            }
          }
          return (
            <GridChild onClick={() => dateSelectOnClick(number + 1)}>
              {number + 1}
            </GridChild>
          );
        })}
      </Grid>
    </LootContainer>
  );
};

export default CalendarGrid;
