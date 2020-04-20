import React from 'react';
import styled from 'styled-components';

interface IRoundedButton {
  text: string;
  link: string;
}

const StyledA = styled.a`
  background-color: #ffffff;
  color: #222222;
  border: 1px solid transparent;
  border-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 21px 0 21px;
  height: 42px;
  border-radius: 21px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  transition: box-shadow 0.2s ease;
  text-decoration: none;

  font-size: 14px;
  font-weight: 600;

  &:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.18);
  }
`;

const RoundedButton: React.FC<IRoundedButton> = ({ text }) => {
  return (
    <div>
      <StyledA href="/home">{text}</StyledA>
    </div>
  );
};

export default RoundedButton;
