import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import CalendarGrid from './CalendarGrid';

const LootContainer = styled.div``;

const Calendar = () => {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = today.getMonth();
  // * 추후 요일 선택에 사용될 예정
  const todaysDate = today.getDate();

  // 받은 year, month를 이용해 첫번째 날을 계산함
  const currentMonthFirstDay = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  // 받은 year, month를 이용해 마지막 날을 계산함
  const currentMonthLastDate = (year: number, month: number) => {
    return 32 - new Date(year, month, 32).getDate();
  };

  // * 캘린더는 생각보다 많은 정보를 담고 있어야 함. reducer로 로직을 분리해줄거임
  const leftCalendarDefaultSate: CalendarDefaultStateType = {
    year: todaysYear,
    month: todaysMonth,
    firstDay: currentMonthFirstDay(todaysYear, todaysMonth),
    lastDate: currentMonthLastDate(todaysYear, todaysMonth),
  };

  const rightCalendarDefaultSate: CalendarDefaultStateType = {
    year: todaysYear,
    month: todaysMonth + 1,
    firstDay: currentMonthFirstDay(todaysYear, todaysMonth + 1),
    lastDate: currentMonthLastDate(todaysYear, todaysMonth + 1),
  };

  const calendarReducer = (
    state: CalendarDefaultStateType,
    action: CalendarAction
  ): CalendarDefaultStateType => {
    switch (action.type) {
      case 'CHANGE_YEAR':
        return { ...state, year: action.payload };
      case 'CHANGE_MONTH':
        return { ...state, month: action.payload };
      case 'CHANGE_FIRSTDAY':
        return { ...state, firstDay: action.payload };
      case 'CHANGE_LASTDATE':
        return { ...state, lastDate: action.payload };
    }
  };

  // 왼쪽, 오른쪽 캘린더가 보여주는 월을 담음
  // 추후에 reducer로 확 바꿔버릴 예정
  const [leftCalendarState, leftCalendarDispatch] = useReducer(
    calendarReducer,
    leftCalendarDefaultSate
  );
  const [rightCalendarState, rightCalendarDispatch] = useReducer(
    calendarReducer,
    rightCalendarDefaultSate
  );

  // 요일 선택을 위해서
  const onClick = (date: number) => {
    console.log(date);
  };

  return (
    <LootContainer>
      <CalendarGrid
        leftCalendarState={leftCalendarState}
        leftCalendarDispatch={leftCalendarDispatch}
        rightCalendarState={rightCalendarState}
        rightCalendarDispatch={rightCalendarDispatch}
        dateSelectOnClick={onClick}
      ></CalendarGrid>
    </LootContainer>
  );
};

export default Calendar;
