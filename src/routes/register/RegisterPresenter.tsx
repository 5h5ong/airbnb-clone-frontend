import React from 'react';
import styled from 'styled-components';
import RedButton from '../../components/Buttons/RedButton';
import BaseInput from '../../components/inputs/BaseInput';
import SpaceWrapper from '../../components/Wrappers/SpaceWrapper';
import { UseInputReturnPropsType } from '../../hooks/useInput';

interface RegisterPresenterProps {
  email: UseInputReturnPropsType;
  password: UseInputReturnPropsType;
  firstName: UseInputReturnPropsType;
  lastName: UseInputReturnPropsType;
  register: () => Promise<void>;
}

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

const RegisterPresenter: React.FC<RegisterPresenterProps> = ({
  register,
  email,
  password,
  firstName,
  lastName,
}) => {
  return (
    <Container>
      <RegisterFormContainer>
        <SpaceWrapper gap={15}>
          <Title>회원가입</Title>
          <SpaceWrapper gap={20}>
            <BaseInput
              placeholder="이메일 주소"
              value={email.value}
              onChange={email.onChange}
            />
            <BaseInput
              placeholder="이름"
              value={firstName.value}
              onChange={firstName.onChange}
            />
            <BaseInput
              placeholder="성"
              value={lastName.value}
              onChange={lastName.onChange}
            />
            <BaseInput
              placeholder="password"
              value={password.value}
              onChange={password.onChange}
            />
          </SpaceWrapper>
          <RedButton onClick={register}>회원가입</RedButton>
        </SpaceWrapper>
      </RegisterFormContainer>
    </Container>
  );
};

export default RegisterPresenter;
