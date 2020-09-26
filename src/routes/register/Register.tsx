import React from 'react';
import styled from 'styled-components';
import RedButton from '../../components/Buttons/RedButton';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import BaseInput from '../../components/inputs/BaseInput';
import SpaceWrapper from '../../components/Wrappers/SpaceWrapper';

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  flex-direction: colvmn;
  justify-content: center;
  align-items: center;
`;
const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;

const Register: React.FC = () => {
  return (
    <Container>
      <RegisterFormContainer>
        <SpaceWrapper gap={15}>
          <Title>회원가입</Title>
          <SpaceWrapper gap={20}>
            <BaseInput placeholder="이메일 주소" />
            <BaseInput placeholder="이름" />
            <BaseInput placeholder="성" />
            <BaseInput placeholder="password" />
          </SpaceWrapper>
          <RedButton>회원가입</RedButton>
        </SpaceWrapper>
      </RegisterFormContainer>
    </Container>
  );
};

export default WithHeaderPadding(Register);
