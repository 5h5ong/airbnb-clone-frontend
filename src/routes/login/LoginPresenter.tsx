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
  isLoading: boolean;
  isError: boolean;
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
const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.darkGrayColor};
`;

const LoginPresenter: React.FC<LoginPresenterProps> = ({
  email,
  password,
  login,
  isLoading,
  isError,
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
              type="password"
            />
            {isError && (
              <ErrorMessage>
                아이디 또는 비밀번호를 다시 확인하여 주세요.
              </ErrorMessage>
            )}
          </ColumnSpaceWrapper>
          <RedButton isLoading={isLoading} onClick={login}>
            로그인
          </RedButton>
        </ColumnSpaceWrapper>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginPresenter;
