import React from 'react';
import AccommodationsCard from '../Cards/AccmmodationsCard';
import ColumnSpaceWrapper from '../Wrappers/ColumnSpaceWrapper';

interface AccommodationsListsProps {
  accommodationsData: AccommodationsDataType[];
}

const AccommodationsLists: React.FC<AccommodationsListsProps> = ({
  accommodationsData,
}) => {
  return (
    <ColumnSpaceWrapper gap={0}>
      {accommodationsData.map((accommodations) => (
        <AccommodationsCard
          key={`accommodation-card-${accommodations.name}`}
          id={accommodations.id}
          name={accommodations.name}
          image={accommodations.image}
          price={accommodations.price}
          description="완전 안전, 완전 깨끗, 완전 쾌적. 여러분들의 행복한 여행을 위한 모든 것."
        />
      ))}
    </ColumnSpaceWrapper>
  );
};

export default AccommodationsLists;
