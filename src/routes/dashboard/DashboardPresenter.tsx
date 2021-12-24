import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../components/Cards/BasicCard';
import { isoStringToRealDateString } from '../../libs/date';

const LootContainer = styled.div`
  /* 최대 width를 고정함 */
  max-width: 1120px;
  /* LootContainer 중앙정렬 */
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 20px;

  .title-and-content {
    width: 100%;
    margin: 50px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-row-gap: 30px;
  }
`;
/**
 * 숙소들, 예약들을 담을 Grid
 */
const TileGrid = styled.div`
  display: grid;
  min-height: 350px;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
const TileCard = styled.div<{ url: string }>`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(2, 50px);
  grid-template-rows: auto;
  grid-column-gap: 10px;
  .image {
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    border-radius: 8px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .text {
    grid-column: 2/2;
    align-self: center;
  }
  .bold {
    font-weight: bold;
  }
  .small {
    font-size: 12px;
  }
  .large {
    font-size: 18px;
  }
`;
const TileCardSecondary = styled.div<{ url: string }>`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: 10px;
  .image {
    min-height: 200px;
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    border-radius: 8px;
  }
  .text {
    align-self: center;
  }
`;
/**
 * 텍스트 위에 설명이 적혀있는 스타일 컴포넌트
 */
const TextWithDescription = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
  .text {
    grid-row: 2/3;
    grid-column: 1/1;
  }
  .description {
    grid-row: 1/2;
    grid-column: 1/1;
    color: gray;
    font-size: 5px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const DashboardPresenter: React.FC<DashboardProps> = ({
  email,
  accommodations,
  reservations,
}) => {
  return (
    <LootContainer>
      <div>
        <Title>내 정보</Title>
        <div>{email}</div>
      </div>
      <BasicCard>
        <div className="title-and-content">
          <Title>숙소</Title>
          <TileGrid>
            {accommodations?.map(({ id, image, address, name }) => (
              <TileCard url={image[0]}>
                <div className="image" />
                <div className="text large bold">{name}</div>
                <div className="text small">{address}</div>
              </TileCard>
            ))}
          </TileGrid>
        </div>
      </BasicCard>
      <BasicCard>
        <div className="title-and-content">
          <Title>예약</Title>
          <TileGrid>
            {reservations?.map(
              ({ issuedDate, reservationDate, accommodationData }) => (
                <TileCardSecondary url={accommodationData.image[0]}>
                  <div className="image" />
                  <div className="text">
                    <TextWithDescription>
                      <div className="description">이름</div>
                      <div className="text">{accommodationData.name}</div>
                    </TextWithDescription>
                  </div>
                  <div className="text">
                    <TextWithDescription>
                      <div className="description">예약한 날짜</div>
                      <div className="text">
                        {isoStringToRealDateString(issuedDate)}
                      </div>
                    </TextWithDescription>
                  </div>
                  <div className="text">
                    <TextWithDescription>
                      <div className="description">시작일</div>
                      <div className="text">
                        {isoStringToRealDateString(reservationDate.start)}
                      </div>
                    </TextWithDescription>
                  </div>
                  <div className="text">
                    <TextWithDescription>
                      <div className="description">종료일</div>
                      <div className="text">
                        {isoStringToRealDateString(reservationDate.end)}
                      </div>
                    </TextWithDescription>
                  </div>
                </TileCardSecondary>
              )
            )}
          </TileGrid>
        </div>
      </BasicCard>
    </LootContainer>
  );
};

export default DashboardPresenter;
