import React from 'react';
import styled from 'styled-components';

interface IRoundedButton {
  type: 'shadow' | 'gray';
  text: string;
  link: string;
}

const BaseA = styled.a`
  background-color: #ffffff;
  color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  border-radius: 21px;
`;

const StyledShadowA = styled(BaseA)`
  border: 1px solid transparent;
  border-color: #ebebeb;
  padding: 0 21px 0 21px;
  height: 42px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.18);
  }
`;
const StyledGrayA = styled(BaseA)`
  padding: 12px;

  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

const RoundedButton: React.FC<IRoundedButton> = ({ text, type }) => {
  return type === 'shadow' ? (
    <StyledShadowA href="/home">{text}</StyledShadowA>
  ) : (
    <StyledGrayA>{text}</StyledGrayA>
  );
};

export default RoundedButton;
