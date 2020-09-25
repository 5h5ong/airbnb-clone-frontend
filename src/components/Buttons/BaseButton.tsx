import React from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  onClick: () => {};
}

export const BaseButtonStyle = styled.button`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button(BaseButtonStyle);

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick }) => {
  return <Button>{children}</Button>;
};

export default BaseButton;
