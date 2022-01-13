import React from 'react';
import styled from 'styled-components';

type TodaysType = {
  year: number;
  month: number;
  date: number;
};

interface CalendarGridProps {
  disableCalendar?: boolean;
  // 왼쪽 달력의 state
  leftCalendarState: CalendarDefaultStateType;
  // 왼쪽 달력의 dispatch
  leftCalendarDispatch: React.Dispatch<CalendarAction>;
  // 오른쪽 달력의 state
  rightCalendarState: CalendarDefaultStateType;
  // 오른쪽 달력의 dispatch
  rightCalendarDispatch: React.Dispatch<CalendarAction>;
  // 요일 선택 처리 함수
  dateSelectOnClick: (clicked: Date) => void;
  // 오늘 날짜의 정보
  todays: TodaysType;
  // 현재 선택된 날짜(체크인, 체크아웃)
  firstSelectedDate: Date | undefined;
  secondSelectedDate: Date | undefined;
}

const LootContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Grid가 정렬되는 방식을 정해줄 수 있음 */
  grid-auto-flow: column;
  grid-column-gap: 30px;
`;
const DateViewerContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 50px 1fr;
  justify-self: center;
`;
const MidiumText = styled.span`
  /* Using Flex */
  flex: 1;
  /* 가로 세로 센터 정렬 */
  justify-self: center;
  align-self: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  grid-template-rows: repeat(6, 50px);
  grid-row-gap: 2.5px;
`;
const GridChild = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
const GridChildGray = styled(GridChild)`
  color: ${(props) => props.theme.color.lightGrayColor};
`;
// checkin === false, checkout === true
const GridChildSelected = styled(GridChild)<{
  checkinOrCheckout: 'checkin' | 'checkout' | 'normal';
}>`
  /* GridChildSelectedRound의 absolute를 제대로 된 위치에 고정시키기 위해 relative를 사용함 */
  position: relative;
  background-color: #e3e3e3;
  ${(props) =>
    props.checkinOrCheckout === 'checkin' &&
    `
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    `};
  ${(props) =>
    props.checkinOrCheckout === 'checkout' &&
    `
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  `}
`;
const GridChildSelectedRound = styled.div`
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // GridChildSelected의 위에 표시하기 위해 필요함
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 100%;
`;

// 왼쪽, 오른쪽 캘린더를 통합해 관리하기 위함
type DateViewerProps = {
  disableCalendar?: boolean;
  calendarState: CalendarDefaultStateType;
  todays: TodaysType;
  firstSelectedDate: Date | undefined;
  secondSelectedDate: Date | undefined;
  dateSelectOnClick: (clicked: Date) => void;
};

const DateViewer: React.FC<DateViewerProps> = ({
  disableCalendar,
  calendarState,
  todays,
  firstSelectedDate,
  secondSelectedDate,
  dateSelectOnClick,
}) => {
  return (
    <DateViewerContainer>
      {/* Date 객체는 값이 0부터 시작하기 때문에 1을 더해줘야 현재의 날짜와 일치함 */}
      <MidiumText>{calendarState.month + 1}월</MidiumText>
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
        {[...Array(calendarState.firstDay).keys()].map(() => (
          <div />
        ))}
        {/* 숫자 삽입 */}
        {/* Array 객체는 0부터 시작하기에 주의해야 함. */}
        {/* map에서 for로 수정함. 
            map은 체크인, 체크아웃 사이의 날짜들의 스타일을 적용하는 과정에 Production에서 undefined를 리턴하는 문제가 있음. */}
        {(() => {
          let elements = [];
          for (const number of [...Array(calendarState.lastDate).keys()]) {
            const currentDate = new Date(
              calendarState.year,
              calendarState.month,
              number + 1
            );

            /**
             * 오늘 날의 년과 월이 맞는다면 오늘 날 이전을 회색으로 만들고 onclick 이벤트가 발생하지 않게 만듬.
             */
            if (todays.year === calendarState.year) {
              if (todays.month === calendarState.month) {
                /* number+1 값이 실제 날짜임. 0부터 시작해서 발생하는 문제임. */
                if (todays.date > number + 1) {
                  elements.push(<GridChildGray>{number + 1}</GridChildGray>);
                  continue;
                }
              }
            }

            /**
             * 체크인, 체크아웃과 날짜가 같다면 그 것들 전용의 스타일을 적용함.
             * 같지 않다면, 체크인과 체크아웃 사이의 간격에 들어있는 날짜인지 확인하여
             * 회색 바탕의 스타일을 적용함.
             */
            if (firstSelectedDate && secondSelectedDate) {
              // 체크인인지, 체크아웃인지 값을 확인
              const isCheckin =
                currentDate.getFullYear() === firstSelectedDate.getFullYear() &&
                currentDate.getMonth() === firstSelectedDate.getMonth() &&
                currentDate.getDate() === firstSelectedDate.getDate();
              const isCheckout =
                currentDate.getFullYear() ===
                  secondSelectedDate.getFullYear() &&
                currentDate.getMonth() === secondSelectedDate.getMonth() &&
                currentDate.getDate() === secondSelectedDate.getDate();
              if (isCheckin || isCheckout) {
                elements.push(
                  <GridChildSelected
                    checkinOrCheckout={
                      isCheckin ? 'checkin' : isCheckout ? 'checkout' : 'normal'
                    }
                  >
                    <GridChildSelectedRound>
                      {number + 1}
                    </GridChildSelectedRound>
                  </GridChildSelected>
                );
                continue;
              } else if (
                currentDate >= firstSelectedDate &&
                currentDate <= secondSelectedDate
              ) {
                elements.push(
                  <GridChildSelected
                    checkinOrCheckout="normal"
                    onClick={
                      disableCalendar
                        ? undefined
                        : () => {
                            dateSelectOnClick(currentDate);
                          }
                    }
                  >
                    <div>{number + 1}</div>
                  </GridChildSelected>
                );
                continue;
              }
            }

            /**
             * 날짜 기본 스타일.
             * 캘린더를 비활성화 시 onclick 이벤트가 발생되지 않게 만듬.
             */
            elements.push(
              <GridChild
                onClick={
                  disableCalendar
                    ? undefined
                    : () => {
                        dateSelectOnClick(currentDate);
                      }
                }
              >
                {number + 1}
              </GridChild>
            );
          }
          return elements;
        })()}
      </Grid>
    </DateViewerContainer>
  );
};

const CalendarGrid: React.FC<CalendarGridProps> = ({
  disableCalendar,
  leftCalendarState,
  rightCalendarState,
  dateSelectOnClick,
  todays,
  firstSelectedDate,
  secondSelectedDate,
}) => {
  return (
    <LootContainer>
      <DateViewer
        disableCalendar={disableCalendar}
        calendarState={leftCalendarState}
        firstSelectedDate={firstSelectedDate}
        secondSelectedDate={secondSelectedDate}
        todays={todays}
        dateSelectOnClick={dateSelectOnClick}
      />
      <DateViewer
        disableCalendar={disableCalendar}
        calendarState={rightCalendarState}
        firstSelectedDate={firstSelectedDate}
        secondSelectedDate={secondSelectedDate}
        todays={todays}
        dateSelectOnClick={dateSelectOnClick}
      />
    </LootContainer>
  );
};

export default CalendarGrid;
