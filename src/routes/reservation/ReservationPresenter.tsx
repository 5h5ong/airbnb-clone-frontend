import React from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';

interface ReservationPresenterProps {
  /** Accommodations Data */
  accommodationsData: AccommodationsDataType;
  // Checkin and Checkout
  firstSelectedDate: Date | undefined;
  secondSelectedDate: Date | undefined;
  setFirstSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSecondSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const LootContainer = styled.div`
  padding-left: 150px;
  padding-right: 150px;
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
  background-image: ${(props): string => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;
const SmallImage = styled(BaseImage)``;
const LargeImage = styled(BaseImage)`
  flex: 1;
  margin-right: 7px;
`;
const ReservationSection = styled.div``;

const ReservationPresenter: React.FC<ReservationPresenterProps> = ({
  accommodationsData,
  firstSelectedDate,
  secondSelectedDate,
  setFirstSelectedDate,
  setSecondSelectedDate,
}) => {
  return (
    <LootContainer>
      <TopTitleSection>
        <Title>{accommodationsData.name}</Title>
        <SubTitle>{accommodationsData.address}</SubTitle>
      </TopTitleSection>
      <ImageSection>
        <LargeImage imageUrl={accommodationsData.image[0]} />
        <Grid className="image-grid">
          <SmallImage imageUrl={accommodationsData.image[1]} />
          <SmallImage imageUrl={accommodationsData.image[2]} />
          <SmallImage imageUrl={accommodationsData.image[3]} />
          <SmallImage imageUrl={accommodationsData.image[4]} />
        </Grid>
      </ImageSection>
      <ReservationSection>
        <Calendar
          firstSelectedDate={firstSelectedDate}
          secondSelectedDate={secondSelectedDate}
          setFirstSelectedDate={setFirstSelectedDate}
          setSecondSelectedDate={setSecondSelectedDate}
        />
      </ReservationSection>
    </LootContainer>
  );
};

export default ReservationPresenter;
