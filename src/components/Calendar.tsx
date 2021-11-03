import React from 'react';
import styled from 'styled-components';
import CalendarGrid from './CalendarGrid';

const LootContainer = styled.div``;

const Calendar = () => {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth();
  const todaysDate = today.getDate();
  // 해당 월의 첫번째 날 정보
  const first = new Date(todaysYear, todaysMonth, 1);
  // 해당 월의 첫번째 날 요일 확인
  const firstDay = first.getDay();
  // 해당 월의 마지막 날이 언제인지 확인
  const lastDate = 32 - new Date(todaysYear, todaysMonth, 32).getDate();
  // 다음 월의 첫번째 날 요일
  const nextFirstDay = new Date(todaysYear, todaysMonth + 1, 1).getDay();
  // 다음 월의 마지막 날이 언제인지 확인
  const nextLastDate = 32 - new Date(todaysYear, todaysMonth + 1, 32).getDate();

  return (
    <LootContainer>
      <CalendarGrid
        firstDay={firstDay}
        lastDate={lastDate}
        nextFirstDay={nextFirstDay}
        nextLastDate={nextLastDate}
      ></CalendarGrid>
    </LootContainer>
  );
};

export default Calendar;
