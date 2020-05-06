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

const ShadowCover = styled.div`
  position: absolute;
  width: 100%;
  height: 720px;
  top: 0px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 1, 0.4) 0%,
    rgba(0, 0, 0, 0.394) 1.4%,
    rgba(0, 0, 0, 0.378) 5.6%,
    rgba(0, 0, 0, 0.35) 12.5%,
    rgba(0, 0, 0, 0.311) 22.2%,
    rgba(0, 0, 0, 0.261) 34.7%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.139) 65.3%,
    rgba(0, 0, 0, 0.089) 77.8%,
    rgba(0, 0, 0, 0.05) 87.5%,
    rgba(0, 0, 0, 0.022) 94.4%,
    rgba(0, 0, 0, 0) 100%
  );
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 720px;
`;
const ImageSection = styled.div<StyledProps>`
  height: 100%;
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
  z-index: 1;
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
      <ImageContainer>
        <ImageSection image={image}>
          <TextSection>
            <TextContainer>
              <SubTitle>{subTitle}</SubTitle>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </TextContainer>
          </TextSection>
        </ImageSection>
        <ShadowCover />
      </ImageContainer>
      <ComponentSection>{children}</ComponentSection>
    </>
  );
};

export default PageLayoutWithImage;
