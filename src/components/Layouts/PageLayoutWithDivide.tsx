import React from 'react';
import {
  Description,
  ImageContainer,
  PageLayoutProps,
  SubTitle,
  Title,
  TextContainer,
  TextSection,
  ImageSection,
  ComponentSection,
} from './pageLayoutStyles';

const PageLayoutWithDivide: React.FC<PageLayoutProps> = ({
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
      </ImageContainer>
      <ComponentSection>{children}</ComponentSection>
    </>
  );
};

export default PageLayoutWithDivide;
