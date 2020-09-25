import React from 'react';
import styled from 'styled-components';

interface SpaceWrapper {
  gap: number;
}
interface StyledProps {
  gap: number;
}

const Container = styled.div<StyledProps>`
  *:not(:last-child) {
    margin-bottom: ${(props) => `${props.gap}px`};
  }
`;

const SpaceWrapper: React.FC<SpaceWrapper> = ({ children, gap }) => {
  return <Container gap={gap}>{children}</Container>;
};

export default SpaceWrapper;
