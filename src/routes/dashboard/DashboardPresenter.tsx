import React from 'react';
import styled from 'styled-components';
import BasicCard from '../../components/Cards/BasicCard';
import { isoStringToRealDateString } from '../../libs/date';
import { filenameToGcsUrl } from '../../libs/string';
import RedButtonComponent from '../../components/Buttons/RedButton';
import { Title, TextWithDescription } from '../../styles/sharedStyled';
import { FaTrash } from 'react-icons/fa';
import { BaseButtonStyle } from '../../components/Buttons/BaseButton';

interface DashboardPresenterProps extends DashboardProps {
  changeHistory: (root: 'accommodations' | 'reservation', goto: string) => void;
}

const LootContainer = styled.div`
  /* 최대 width를 고정함 */
  max-width: ${(props) => props.theme.size.maxWidth};
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
  .space-between {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
`;
/**
 * 숙소들, 예약들을 담을 Grid
 */
const TileGrid = styled.div`
  display: grid;
  min-height: 350px;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;
const TileCard = styled.div<{ url: string }>`
  display: grid;
  grid-template-columns: 250px 1fr 40px;
  grid-template-rows: repeat(2, 90px);
  grid-column-gap: 10px;
  .image {
    background-image: ${(props) => `url('${props.url}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
  .delete {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;
const DeleteButton = styled(BaseButtonStyle)`
  width: 40px;
  height: 40px;
  &:hover {
    background-color: ${(props) => props.theme.color.basicButtonHoverColor};
  }
`;
const TileCardSecondary = styled.div<{ url: string }>`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 10px;
  .image {
    min-height: 200px;
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    border-radius: 8px;
    grid-column: 1 / span 2;
  }
  .text {
    align-self: center;
    justify-self: center;
  }
`;

const DashboardPresenter: React.FC<DashboardPresenterProps> = ({
  email,
  accommodations,
  reservations,
  changeHistory,
}) => {
  return (
    <LootContainer>
      <div>
        <Title>내 정보</Title>
        <div>{email}</div>
      </div>
      <BasicCard>
        <div className="title-and-content">
          <div className="space-between">
            <Title>숙소</Title>
            <RedButtonComponent
              onClick={() => changeHistory('accommodations', 'create')}
            >
              숙소 만들기
            </RedButtonComponent>
          </div>
          <TileGrid>
            {accommodations?.map(({ id, image, address, name }) => (
              <TileCard url={filenameToGcsUrl(image[0])}>
                <div className="image" />
                <DeleteButton className="delete">
                  <FaTrash />
                </DeleteButton>
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
                <TileCardSecondary
                  url={accommodationData.image[0]}
                  onClick={() =>
                    changeHistory('reservation', accommodationData.id)
                  }
                >
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
