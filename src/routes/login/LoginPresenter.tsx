import React from 'react';
import styled from 'styled-components';
import RedButton from '../../components/Buttons/RedButton';
import Title from '../../components/etc/Title';
import BaseInput from '../../components/inputs/BaseInput';
import ColumnSpaceWrapper from '../../components/Wrappers/ColumnSpaceWrapper';
import { UseInputReturnPropsType } from '../../hooks/useInput';

interface LoginPresenterProps {
  email: UseInputReturnPropsType;
  password: UseInputReturnPropsType;
  // ! 추후 ? 제거
  login?: () => Promise<void>;
}

const Container = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const LoginPresenter: React.FC<LoginPresenterProps> = ({
  email,
  password,
  login,
}) => {
  return (
    <Container>
      <LoginFormContainer>
        <ColumnSpaceWrapper gap={15}>
          <Title>로그인</Title>
          <ColumnSpaceWrapper gap={20}>
            <BaseInput
              placeholder="이메일"
              value={email.value}
              onChange={email.onChange}
            />
            <BaseInput
              placeholder="패스워드"
              value={password.value}
              onChange={password.onChange}
            />
          </ColumnSpaceWrapper>
          <RedButton onClick={login}>로그인</RedButton>
        </ColumnSpaceWrapper>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginPresenter;
