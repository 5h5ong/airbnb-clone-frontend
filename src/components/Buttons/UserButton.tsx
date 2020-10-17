import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #8c8c8c;
  border-radius: 50%;
`;
const FaUserStyled = styled(FaUser)`
  /* user icon을 검은색으로 */
  color: #333333;
  width: 20px;
  height: 20px;
`;

const UserButton: React.FC = () => {
  return (
    <Container>
      <FaUserStyled />
    </Container>
  );
};

export default UserButton;
