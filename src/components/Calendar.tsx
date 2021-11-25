import React, { useReducer, useState, useEffect } from 'react';
import styled from 'styled-components';
import CalendarGrid from './CalendarGrid';

const LootContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 50px;
`;
const CheckInAndOutConatiner = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1px 200px);
  /*grid-column-gap: 20px;*/
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 35px;
  border: 0.5px solid #dbdbdb;
`;
const CheckInAndOutBase = styled.div<{ toggle: boolean }>`
  display: grid;
  padding: 20px;
  grid-auto-flow: row;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 5px;
  justify-items: start;
  align-items: center;
  background-color: ${props => (props.toggle ? `#ffffff` : `#f6f6f6`)};
  ${props =>
    props.toggle &&
    `box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 15px 0px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;`};
  border-radius: 35px;
`;
const CheckIn = styled(CheckInAndOutBase)``;
const CheckOut = styled(CheckInAndOutBase)``;
const SmallText = styled.div`
  font-weight: bold;
`;
// CheckInAndOutBase에서 CheckIn, CheckOut을 구별해주기 위해 사용됨
const VerticalDivider = styled.hr`
  width: 1px;
  height: 50px;
  background-color: #dbdbdb;
`;

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
    lastDate: currentMonthLastDate(todaysYear, todaysMonth)
  };

  const rightCalendarDefaultSate: CalendarDefaultStateType = {
    year: todaysYear,
    month: todaysMonth + 1,
    firstDay: currentMonthFirstDay(todaysYear, todaysMonth + 1),
    lastDate: currentMonthLastDate(todaysYear, todaysMonth + 1)
  };

  // true === checkout, false === checkin
  const [toggleCheckInAndOut, setToggleCheckInAndOut] = useState<boolean>(
    false
  );

  // 체류할 기간을 저장하는 state
  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | undefined>(
    undefined
  );
  const [secondSelectedDate, setSecondSelectedDate] = useState<
    Date | undefined
  >(undefined);

  useEffect(() => {
    console.log({
      firstSelectedDate: firstSelectedDate,
      secondSelectedDate: secondSelectedDate
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
  // 년, 월, 일을 받아 Date 객체 형식으로 변환 후 First, Second SelectedDate 둘 중 하나에 넣어줌
  const onClick = (year: number, month: number, date: number) => {
    const clicked = new Date(year, month, date);

    // 체크인 날짜를 처음 입력한다면 그 후 체크아웃으로 넘어감
    if (!firstSelectedDate) {
      setFirstSelectedDate(clicked);
      setToggleCheckInAndOut(s => !s);
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

  /** CheckIn <-> CheckOut */
  const checkInOrCheckOutOnClick = () => {
    setToggleCheckInAndOut(s => !s);
  };

  return (
    <LootContainer>
      {/* CheckIn, CheckOut으로 시작날짜, 종료날짜를 입력하게 만들어줄거임 */}
      <CheckInAndOutConatiner>
        <VerticalDivider />
        <CheckIn
          toggle={!toggleCheckInAndOut}
          onClick={() => checkInOrCheckOutOnClick()}
        >
          <SmallText>체크인</SmallText>
          {!firstSelectedDate && <SmallText>---월 ---일</SmallText>}
          {firstSelectedDate && (
            <SmallText>
              {firstSelectedDate.getMonth()}월 {firstSelectedDate.getDate()}일
            </SmallText>
          )}
        </CheckIn>
        <VerticalDivider />
        <CheckOut
          toggle={toggleCheckInAndOut}
          onClick={() => checkInOrCheckOutOnClick()}
        >
          <SmallText>체크아웃</SmallText>
          {!secondSelectedDate && <SmallText>---월 ---일</SmallText>}
          {secondSelectedDate && (
            <SmallText>
              {secondSelectedDate.getMonth()}월 {secondSelectedDate.getDate()}일
            </SmallText>
          )}
        </CheckOut>
        <VerticalDivider />
      </CheckInAndOutConatiner>
      <CalendarGrid
        leftCalendarState={leftCalendarState}
        leftCalendarDispatch={leftCalendarDispatch}
        rightCalendarState={rightCalendarState}
        rightCalendarDispatch={rightCalendarDispatch}
        dateSelectOnClick={onClick}
        todays={{
          year: todaysYear,
          month: todaysMonth,
          date: todaysDate
        }}
      ></CalendarGrid>
    </LootContainer>
  );
};

export default Calendar;
