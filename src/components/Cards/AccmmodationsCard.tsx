import React from 'react';
import styled from 'styled-components';
import ColumnSpaceWrapper from '../Wrappers/ColumnSpaceWrapper';
import RowSpaceWrapper from '../Wrappers/RowSpaceWrapper';

interface AccommodationsCardProps {
  name: string;
  image: string[];
  price: string;
  description: string;
}
interface MarginStyledType {
  gap: number;
}
interface ThumbnailStyledType {
  imageUrl: string;
}

const Margin = styled.div<MarginStyledType>`
  margin-bottom: ${(props) => `${props.gap}px`};
`;
const DividerBase = styled.div`
  width: 70px;
  border-bottom: 1px solid #ebebeb;
`;
const DividerWithMargin = styled(DividerBase)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Divider = styled(DividerBase)`
  width: 100%;
  margin-left: 40px;
`;
const Container = styled.div`
  width: 100%;
  height: 280px;
  padding: 40px;
`;
const Thumbnail = styled.div<ThumbnailStyledType>`
  background-color: gray;
  border-radius: 4px;
  width: 300px;
  height: 200px;
  background: ${(props) => `url('${props.imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const TextContainer = styled.div`
  /* 옆의 썸네일과 어울리게 위쪽에 빈공간을 줌 */
  padding-top: 10px;
`;
// 숙소 이름
const Name = styled.div`
  font-size: 25pt;
`;
// 숙소 가격
const Price = styled.div`
  font-size: 20pt;
  margin-bottom: 20px;
`;
// 숙소 설명
const Description = styled.div`
  font-size: 12pt;
`;

const AccommodationsCard: React.FC<AccommodationsCardProps> = ({
  name,
  price,
  description,
  image,
}) => {
  return (
    <ColumnSpaceWrapper gap={10}>
      <Container>
        <RowSpaceWrapper gap={10}>
          <Thumbnail imageUrl={image[0]} />
          <TextContainer>
            <Name>{name}</Name>
            <DividerWithMargin />
            <Price>{price}원</Price>
            <Description>{description}</Description>
          </TextContainer>
        </RowSpaceWrapper>
      </Container>
      <Divider />
    </ColumnSpaceWrapper>
  );
};

export default AccommodationsCard;
