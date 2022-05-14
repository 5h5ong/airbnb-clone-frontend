import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import logout from '../../Functions/logout';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
  color: white;
  width: 25px;
  height: 25px;
  background-color: #8c8c8c;
  border-radius: 16px;
`;

const UserButton: React.FC = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const [userModalToggle, setUserModalToggle] = useState(false);

  const onClick = () => {
    setUserModalToggle((s) => !s);
  };

  const userLogout = () => {
    logout();
    userContext &&
      userContext.setUser({ isSignIn: false, id: '', email: '', role: '' });
    // Home으로 이동
    history.push('/');
  };

  return (
    <>
      <Container onClick={() => onClick()}>
        <FaUserStyled />
        {userModalToggle && (
          // UserModal을 잡아주기 위함
          <UserModalContainer>
            <UserModal>
              <ModalItem onClick={() => history.push('/dashboard')}>
                내 정보
              </ModalItem>
              <ModalItem onClick={() => userLogout()}>로그아웃</ModalItem>
            </UserModal>
          </UserModalContainer>
        )}
      </Container>
    </>
  );
};

export default UserButton;
