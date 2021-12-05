import React, { useReducer, useState, useEffect } from 'react';
import styled from 'styled-components';
import CalendarGrid from './CalendarGrid';

type CalendarProps = {
  firstSelectedDate: Date | undefined;
  secondSelectedDate: Date | undefined;
  setFirstSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSecondSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  toggleCheckInAndOut: boolean;
  setToggleCheckInAndOut: React.Dispatch<React.SetStateAction<boolean>>;
};

const LootContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 50px;
`;

const Calendar: React.FC<CalendarProps> = ({
  firstSelectedDate,
  secondSelectedDate,
  setFirstSelectedDate,
  setSecondSelectedDate,
  setToggleCheckInAndOut,
  toggleCheckInAndOut,
}) => {
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

  // * 다음 달의 캘린더를 표시하기 위한 정보
  // 12월 -> 다음년도 1월 같은 예외 처리를 위해 Date 객체를 사용해 다음 날 정보 얻음
  const nextDate = new Date(todaysYear, todaysMonth + 1, todaysDate);
  const rightCalendarDefaultSate: CalendarDefaultStateType = {
    year: nextDate.getFullYear(),
    month: nextDate.getMonth(),
    firstDay: currentMonthFirstDay(nextDate.getFullYear(), nextDate.getMonth()),
    lastDate: currentMonthLastDate(nextDate.getFullYear(), nextDate.getMonth()),
  };

  // ! 디버깅, 추후 삭제
  useEffect(() => {
    console.log({
      firstSelectedDate: firstSelectedDate,
      secondSelectedDate: secondSelectedDate,
    });
  }, [firstSelectedDate, secondSelectedDate]);

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
  const [leftCalendarState, leftCalendarDispatch] = useReducer(
    calendarReducer,
    leftCalendarDefaultSate
  );
  const [rightCalendarState, rightCalendarDispatch] = useReducer(
    calendarReducer,
    rightCalendarDefaultSate
  );

  // 요일 선택을 위해서
  // 년, 월, 일을 받아 Date 객체 형식으로 변환 후 First, Second SelectedDate 둘 중 하나에 넣어줌
  // const onClick = (year: number, month: number, date: number) => {
  const onClick = (clicked: Date) => {
    // 체크인 날짜를 처음 입력한다면 그 후 체크아웃으로 넘어감
    if (!firstSelectedDate) {
      setFirstSelectedDate(clicked);
      setToggleCheckInAndOut((s) => !s);
    } else if (!secondSelectedDate) {
      // 체크아웃은 체크인보다 작으면 안됨
      if (clicked > firstSelectedDate) setSecondSelectedDate(clicked);
    } else {
      if (!toggleCheckInAndOut) {
        // 체크인은 체크아웃보다 크면 안됨
        if (clicked < secondSelectedDate) setFirstSelectedDate(clicked);
      } else {
        // 체크아웃은 체크인보다 작으면 안됨
        if (clicked > firstSelectedDate) setSecondSelectedDate(clicked);
      }
    }
  };

  return (
    <LootContainer>
      <CalendarGrid
        leftCalendarState={leftCalendarState}
        leftCalendarDispatch={leftCalendarDispatch}
        rightCalendarState={rightCalendarState}
        rightCalendarDispatch={rightCalendarDispatch}
        dateSelectOnClick={onClick}
        todays={{
          year: todaysYear,
          month: todaysMonth,
          date: todaysDate,
        }}
        firstSelectedDate={firstSelectedDate}
        secondSelectedDate={secondSelectedDate}
      ></CalendarGrid>
    </LootContainer>
  );
};

export default Calendar;
