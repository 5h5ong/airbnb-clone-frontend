import React from 'react';
import {
  PageLayoutProps,
  ImageContainer,
  ImageSection,
  TextSection,
  TextContainer,
  SubTitle,
  Title,
  Description,
  ShadowCover,
  ComponentSectionPadding,
} from './pageLayoutStyles';

const PageLayoutWithImage: React.FC<PageLayoutProps> = ({
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
      <ComponentSectionPadding>{children}</ComponentSectionPadding>
    </>
  );
};

export default PageLayoutWithImage;
