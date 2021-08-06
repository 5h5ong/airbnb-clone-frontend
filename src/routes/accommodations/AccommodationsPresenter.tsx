import React from 'react';
import styled from 'styled-components';
import PageLayoutWithDivide from '../../components/Layouts/PageLayoutWithDivide';
import AccommodationsCard from '../../components/Cards/AccmmodationsCard';
import ColumnSpaceWrapper from '../../components/Wrappers/ColumnSpaceWrapper';

interface AccommodationsDataType {
  address: string;
  name: string;
  price: string;
  image: string[];
  user: string;
}

interface AccommodationsPresenterProps {
  accommodationsData: AccommodationsDataType[];
}

const MapAndListContainer = styled.div`
  display: flex;
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
`;

const AccommodationsPresenter: React.FC<AccommodationsPresenterProps> = ({
  accommodationsData,
}) => {
  return (
    <PageLayoutWithDivide
      image="accommodationsPageImage.jpeg"
      subTitle="편안한 당신의 여행을 위한 에어비엔비 숙소"
      title="숙소"
      description="모두가 함께 즐기는 세계 각지의 멋진 숙소"
    >
      <MapAndListContainer>
        <ListSection>
          <ColumnSpaceWrapper gap={0}>
            {accommodationsData.map((accommodations) => (
              <AccommodationsCard
                name={accommodations.name}
                image={accommodations.image}
                price={accommodations.price}
                description="완전 안전, 완전 깨끗, 완전 쾌적. 여러분들의 행복한 여행을 위한 모든 것."
              />
            ))}
          </ColumnSpaceWrapper>
        </ListSection>
        <MapSection>Map</MapSection>
      </MapAndListContainer>
    </PageLayoutWithDivide>
  );
};

export default AccommodationsPresenter;
