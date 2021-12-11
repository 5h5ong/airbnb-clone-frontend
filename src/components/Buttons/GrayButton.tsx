import React from 'react';
import styled from 'styled-components';
import { BaseButtonStyle } from './BaseButton';

const Button = styled(BaseButtonStyle)`
  background-color: gray;
  color: white;
  font-size: 12pt;
  font-weight: 600;
`;

const GrayButton: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

export default GrayButton;
