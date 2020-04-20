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
      <Rows center>
        <div>로그인</div>
        <RoundedButton text="회원 가입" link="/home" />
      </Rows>
    </ButtonContainer>
  );
};

export default HeaderButton;
