import React from 'react';
import styled from 'styled-components';
import BasicCard from './BasicCard';

interface IImageCardProps {
  image: string;
  title: string;
  description: string;
}

const ImageContainer = styled.div`
  position: flex;
`;
const Img = styled.img`
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DescriptionContainer = styled.div`
  padding: 16px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.theme.color.darkGrayColor};
  margin-top: 4px;
`;

/**
 * 이미지와 title, description을 받아 `BasicCard`을 이용해 `ImageCard`를 반환함.
 */
const ImageCard: React.FC<IImageCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <BasicCard>
      <Container>
        <ImageContainer>
          <Img src={image} />
        </ImageContainer>
        <DescriptionContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DescriptionContainer>
      </Container>
    </BasicCard>
  );
};

export default ImageCard;
