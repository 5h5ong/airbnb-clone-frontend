import React from 'react';
import styled from 'styled-components';
import GrayButton from '../../components/Buttons/GrayButton';
import RedButton from '../../components/Buttons/RedButton';
import Calendar from '../../components/Calendar';
import BasicCard from '../../components/Cards/BasicCard';
import { filenameToGcsUrl } from '../../libs/string';

interface ReservationPresenterProps {
  /** Accommodations Data */
  accommodationsData: Omit<AccommodationsDataType, 'requestUserReservation'>;
  isReserve: boolean;
  // Checkin and Checkout
  firstSelectedDate: Date | undefined;
  secondSelectedDate: Date | undefined;
  setFirstSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSecondSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  // 총 예약 날짜
  totalReservationDate: number;
  // 요소를 합산한 금액(청구될 금액)
  totalReservationPrice: number;
  // Checkin and Checkout 선택 상태
  toggleCheckInAndOut: boolean;
  setToggleCheckInAndOut: React.Dispatch<React.SetStateAction<boolean>>;
  checkInOrCheckOutOnClick: () => void;
  createNewReservationOnClick: () => void;
  cancelReservation: () => void;
  createReservationButtonIsLoading: boolean;
}

const LootContainer = styled.div`
  margin: auto;
  margin-bottom: 100px;
  max-width: ${(props) => props.theme.size.maxWidth};
`;
const TopTitleSection = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 10px;
`;
const SubTitle = styled.div``;
const ImageSection = styled.div`
  display: flex;
  // child들이 border-radius를 적용받을 수 있게 만들기 위해서
  overflow: hidden;
  flex-direction: row;
  /* background-color: black; */
  width: 100%;
  height: 450px;
  border-radius: 10px;
  margin-bottom: 40px;
`;
const Grid = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 7px;
`;
const BaseImage = styled.div<{ imageUrl: string }>`
  background-image: ${(props): string => `url('${props.imageUrl}')`};
  background-size: cover;
  background-position: center;
`;
const SmallImage = styled(BaseImage)``;
const LargeImage = styled(BaseImage)`
  flex: 1;
  margin-right: 7px;
`;
const ReservationSection = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 90px 1fr;
  grid-template-areas: 'bar bar card card' 'calendar calendar card card';
  grid-gap: 40px;
`;
const CheckInAndOutConatiner = styled.div`
  display: grid;
  grid-area: bar;
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
  background-color: ${(props) => (props.toggle ? `#ffffff` : `#f6f6f6`)};
  ${(props) =>
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
const CalendarContainer = styled.div`
  grid-area: calendar;
`;
const ReservationCardContainer = styled.div`
  grid-area: card;
`;
const ReservationCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 150px 150px;
  row-gap: 20px;
  padding: 20px;

  /* 세부적 스타일을 조정해주기 위해, 한 번 classname으로 제어해봤음 */
  .bold-text {
    font-weight: bold;
  }
  .large-text {
    font-size: 20pt;
  }
  .full {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
  .right {
    justify-self: end;
  }
`;
const LightColorText = styled.span<{ underline?: boolean }>`
  color: gray;
  ${(props) => props.underline && `text-decoration: underline;`};
`;

const ReservationPresenter: React.FC<ReservationPresenterProps> = ({
  accommodationsData,
  isReserve,
  firstSelectedDate,
  secondSelectedDate,
  setFirstSelectedDate,
  setSecondSelectedDate,
  totalReservationDate,
  totalReservationPrice,
  toggleCheckInAndOut,
  setToggleCheckInAndOut,
  checkInOrCheckOutOnClick,
  createNewReservationOnClick,
  createReservationButtonIsLoading,
  cancelReservation,
}) => {
  // 반복 사용되는 Variable
  const [priceAsString] = [accommodationsData.price.toLocaleString()];

  return (
    <LootContainer>
      <TopTitleSection>
        <Title>{accommodationsData.name}</Title>
        <SubTitle>{accommodationsData.address}</SubTitle>
      </TopTitleSection>
      <ImageSection>
        <LargeImage imageUrl={filenameToGcsUrl(accommodationsData.image[0])} />
        <Grid className="image-grid">
          <SmallImage
            imageUrl={filenameToGcsUrl(accommodationsData.image[1])}
          />
          <SmallImage
            imageUrl={filenameToGcsUrl(accommodationsData.image[2])}
          />
          <SmallImage
            imageUrl={filenameToGcsUrl(accommodationsData.image[3])}
          />
          <SmallImage
            imageUrl={filenameToGcsUrl(accommodationsData.image[4])}
          />
        </Grid>
      </ImageSection>
      <ReservationSection>
        {/* Checkin & Checkout 상태바 */}
        <CheckInAndOutConatiner>
          <VerticalDivider />
          {/* 예약이 존재할 때 비활성화 */}
          <CheckIn
            toggle={isReserve ? false : !toggleCheckInAndOut}
            onClick={isReserve ? undefined : () => checkInOrCheckOutOnClick()}
          >
            <SmallText>체크인</SmallText>
            {!firstSelectedDate && <SmallText>---월 ---일</SmallText>}
            {firstSelectedDate && (
              <SmallText>
                {firstSelectedDate.getMonth() + 1}월{' '}
                {firstSelectedDate.getDate()}일
              </SmallText>
            )}
          </CheckIn>
          <VerticalDivider />
          {/* 예약이 존재할 때 비활성화 */}
          <CheckOut
            toggle={isReserve ? false : toggleCheckInAndOut}
            onClick={isReserve ? undefined : () => checkInOrCheckOutOnClick()}
          >
            <SmallText>체크아웃</SmallText>
            {!secondSelectedDate && <SmallText>---월 ---일</SmallText>}
            {secondSelectedDate && (
              <SmallText>
                {secondSelectedDate.getMonth() + 1}월{' '}
                {secondSelectedDate.getDate()}일
              </SmallText>
            )}
          </CheckOut>
          <VerticalDivider />
        </CheckInAndOutConatiner>
        <CalendarContainer>
          <Calendar
            disableCalendar={isReserve}
            firstSelectedDate={firstSelectedDate}
            secondSelectedDate={secondSelectedDate}
            setFirstSelectedDate={setFirstSelectedDate}
            setSecondSelectedDate={setSecondSelectedDate}
            toggleCheckInAndOut={toggleCheckInAndOut}
            setToggleCheckInAndOut={setToggleCheckInAndOut}
          />
        </CalendarContainer>
        <ReservationCardContainer>
          <BasicCard>
            <ReservationCard>
              <div className="full">
                <span className="large-text bold-text">￦{priceAsString}</span>
                <span> / 박</span>
              </div>
              <div className="full">
                {!isReserve && (
                  <RedButton
                    onClick={() => createNewReservationOnClick()}
                    isLoading={createReservationButtonIsLoading}
                  >
                    예약하기
                  </RedButton>
                )}
                {isReserve && (
                  <GrayButton
                    onClick={() => cancelReservation()}
                    isLoading={createReservationButtonIsLoading}
                  >
                    예약취소
                  </GrayButton>
                )}
              </div>
              <LightColorText underline={true}>
                ￦{priceAsString}x{totalReservationDate}박
              </LightColorText>
              <div className="right">
                <LightColorText>
                  ￦
                  {(
                    accommodationsData.price * totalReservationDate
                  ).toLocaleString()}
                </LightColorText>
              </div>
              <div className="full bold-text">
                총 합계 ￦{totalReservationPrice.toLocaleString()}
              </div>
            </ReservationCard>
          </BasicCard>
        </ReservationCardContainer>
      </ReservationSection>
    </LootContainer>
  );
};

export default ReservationPresenter;
