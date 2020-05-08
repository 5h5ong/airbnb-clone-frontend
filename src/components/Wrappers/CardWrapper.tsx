import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

const CardWrapper: React.FC = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default CardWrapper;
