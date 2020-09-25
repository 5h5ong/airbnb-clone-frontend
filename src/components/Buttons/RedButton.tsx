import React from 'react';
import styled from 'styled-components';
import { BaseButtonStyle } from './BaseButton';

const Button = styled(BaseButtonStyle)`
  background-color: #ff5a5f;
  color: white;
  font-size: 12pt;
  font-weight: 600;
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 4px,
      rgb(113, 113, 113) 0px 0px 0px 5px,
      rgba(255, 255, 255, 0.5) 0px 0px 0px 6px;
    transition: box-shadow 0.2s ease 0s;
  }
`;

const RedButton: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

export default RedButton;
