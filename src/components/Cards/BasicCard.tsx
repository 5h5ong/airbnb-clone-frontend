import React from 'react';
import styled from 'styled-components';

const CardBase = styled.div`
  display: inline-flex;
  border-radius: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
`;

const BasicCard: React.FC = ({ children }) => {
  return <CardBase>{children}</CardBase>;
};

export default BasicCard;
