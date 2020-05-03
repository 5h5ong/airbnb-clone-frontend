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
const ComponentSection = styled.div``;

const PageLayoutWithImage: React.FC<PageLayoutWithImageProps> = ({ image }) => {
  return (
    <>
      <ImageSection image={image}></ImageSection>
      <ComponentSection></ComponentSection>
    </>
  );
};

export default PageLayoutWithImage;
