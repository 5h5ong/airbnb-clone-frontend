import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 65px;
  background-color: white;
`;
const Header = styled.div`
  height: 100%;
  background-color: transparent;
`;

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <Header>Hello, Mobile Header!!</Header>
    </Container>
  );
};

export default MobileHeader;
