import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #8c8c8c;
  border-radius: 50%;
`;

// 모달이 표시될 위치를 잡아주기 위해서 필요함
const UserModalContainer = styled.div`
  position: relative;
`;

// 실제로 표시될 모달
const UserModal = styled.div`
  z-index: 2;
  right: 0;
  margin-top: 25px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: white;
  border-radius: 15px;
  position: absolute;
  width: 240px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 16px;
`;

const ModalItem = styled.div`
  display: flex;
  color: black;
  width: 100%;
  padding: 12px 16px;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const FaUserStyled = styled(FaUser)`
  /* user icon을 검은색으로 */
  color: #333333;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 16px;
`;

const UserButton: React.FC = () => {
  const [userModalToggle, setUserModalToggle] = useState(false);

  const onClick = () => {
    setUserModalToggle((s) => !s);
  };

  return (
    <>
      <Container onClick={() => onClick()}>
        <FaUserStyled />
        {userModalToggle && (
          // UserModal을 잡아주기 위함
          <UserModalContainer>
            <UserModal>
              <ModalItem>내 정보</ModalItem>
              <ModalItem>로그아웃</ModalItem>
            </UserModal>
          </UserModalContainer>
        )}
      </Container>
    </>
  );
};

export default UserButton;
