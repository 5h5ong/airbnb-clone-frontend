import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;

const Title: React.FC = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Title;
