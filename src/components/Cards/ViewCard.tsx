import React from 'react';
import styled from 'styled-components';

export interface ViewCardProps {
  /** 표시할 이미지의 url */
  image: string;
  country: string;
  name: string;
  price: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  display: flex;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;
const TextContainer = styled.div``;
const Country = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;
const Name = styled.div`
  font-size: 16px;
  line-height: 20px;
`;
const Price = styled(Name)``;

/**
 * 온라인 체험, 숙소 등등의 페이지에서 목록들을 보여줄 때 사용되는 카드
 */
const ViewCard: React.FC<ViewCardProps> = ({ image, country, name, price }) => {
  return (
    <Container>
      <Image src={image} />
      <TextContainer>
        <Country>{country}</Country>
        <Name>{name}</Name>
        <Price>1인당 {price}원</Price>
      </TextContainer>
    </Container>
  );
};

export default ViewCard;
