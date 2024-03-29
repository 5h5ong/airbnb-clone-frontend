import React from 'react';
import styled from 'styled-components';
import { BiArrowToTop } from 'react-icons/bi';
import PageLayoutWithDivide from '../../components/Layouts/PageLayoutWithDivide';
import GoogleMap from '../../components/map/GoogleMap';
import AccommodationsLists from '../../components/lists/AccommodationsLists';
import { Shadow } from '../../styles/sharedStyled';

interface AccommodationsPresenterProps {
  accommodationsData: AccommodationsDataType[];
  viewportElement: AccommodationsDataType[];
  onListScroll: () => void;
  onClickRoundButton: () => void;
  displayHeight: number;
  setListRefState: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}

const MapAndListContainer = styled.div<{ height: number }>`
  display: flex;
  height: ${(props) => `${props.height}px`};
  flex-direction: row;
`;
const Half = styled.div`
  display: flex;
  width: 50%;
`;
const MapSection = styled(Half)`
  width: 50%;
`;
const ListSection = styled(Half)`
  width: 50%;
  overflow: scroll;
`;

const RoundButton = styled(Shadow)`
  display: flex;
  position: absolute;
  background-color: white;
  z-index: 1;
  width: 45px;
  height: 45px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const BiArrowStyled = styled(BiArrowToTop)`
  width: 30px;
  height: 30px;
  margin: auto;
`;

const AccommodationsPresenter: React.FC<AccommodationsPresenterProps> = ({
  accommodationsData,
  viewportElement,
  displayHeight,
  onListScroll,
  onClickRoundButton,
  setListRefState,
}) => {
  return (
    <PageLayoutWithDivide
      image="/accommodationsPageImage.jpeg"
      subTitle="편안한 당신의 여행을 위한 에어비엔비 숙소"
      title="숙소"
      description="모두가 함께 즐기는 세계 각지의 멋진 숙소"
    >
      <MapAndListContainer height={displayHeight - 80}>
        <RoundButton
          onClick={() => {
            onClickRoundButton();
          }}
        >
          <BiArrowStyled />
        </RoundButton>
        <ListSection
          ref={(el) => setListRefState(el)}
          onScroll={() => onListScroll()}
        >
          <AccommodationsLists accommodationsData={accommodationsData} />
        </ListSection>
        <MapSection>
          <GoogleMap inputElement={viewportElement} />
        </MapSection>
      </MapAndListContainer>
    </PageLayoutWithDivide>
  );
};

export default AccommodationsPresenter;
