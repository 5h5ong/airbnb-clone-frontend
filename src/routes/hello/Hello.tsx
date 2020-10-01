import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import ColumnSpaceWrapper from '../../components/Wrappers/ColumnSpaceWrapper';

export interface HelloLocationState {
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const Container = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-size: 24px;
  line-height: 26px;
  strong {
    font-weight: bold;
  }
`;

const Hello: React.FC = () => {
  const location = useLocation<HelloLocationState>();
  const { firstName, lastName, email } = location.state.userInfo;
  return (
    <Container>
      <Column>
        <ColumnSpaceWrapper gap={10}>
          <Text>
            환영합니다! <strong>{`${firstName} ${lastName}`}</strong>님.
          </Text>
          <Text>
            에어비엔비에 참여하시게 된 것을 진심으로 축하합니다.{' '}
            <strong>{email}</strong>으로 로그인 해주세요.
          </Text>
        </ColumnSpaceWrapper>
      </Column>
    </Container>
  );
};

export default WithHeaderPadding(Hello);
