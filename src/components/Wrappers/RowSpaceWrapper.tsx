import React from 'react';
import styled from 'styled-components';

interface SpaceWrapper {
  gap: number;
}
interface StyledProps {
  gap: number;
}

const Container = styled.div<StyledProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: ${(props) => `${props.gap}px`};
  }
`;

const RowSpaceWrapper: React.FC<SpaceWrapper> = ({ children, gap }) => {
  return <Container gap={gap}>{children}</Container>;
};

export default RowSpaceWrapper;
