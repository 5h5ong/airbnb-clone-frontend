import React from 'react';
import styled from 'styled-components';
import Rows from '../Rows/Rows';
import RoundedButton from '../Buttons/RoundedButton';

const ButtonContainer = styled.div`
  color: #222222;
`;

const HeaderButton: React.FC = () => {
  return (
    <ButtonContainer>
      <Rows center margin>
        <RoundedButton type="gray" text="로그인" link="/login" />
        <RoundedButton type="shadow" text="회원 가입" link="/home" />
      </Rows>
    </ButtonContainer>
  );
};

export default HeaderButton;
