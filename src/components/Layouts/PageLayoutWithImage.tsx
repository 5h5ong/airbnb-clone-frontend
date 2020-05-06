import React from 'react';
import styled from 'styled-components';

interface PageLayoutWithImageProps {
  /** 들어갈 이미지의 링크 */
  image: string;
  title: string;
  subTitle: string;
  description: string;
}
type StyledProps = Pick<PageLayoutWithImageProps, 'image'>;

const ImageSection = styled.div<StyledProps>`
  width: 100%;
  height: 720px;
  background-image: ${(props): string => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const TextSection = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
const SubTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04rem;
  margin-bottom: 4px;
`;
const Title = styled.div`
  font-size: 48px;
  line-height: 52px;
  font-weight: 800;
`;
const Description = styled.div`
  font-size: 18px;
  line-height: 26px;
  margin-top: 16px;
  margin-bottom: 24px;
`;
const ComponentSection = styled.div``;

const PageLayoutWithImage: React.FC<PageLayoutWithImageProps> = ({
  image,
  title,
  subTitle,
  description,
  children,
}) => {
  return (
    <>
      <ImageSection image={image}>
        <TextSection>
          <TextContainer>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
        </TextSection>
      </ImageSection>
      <ComponentSection>{children}</ComponentSection>
    </>
  );
};

export default PageLayoutWithImage;
