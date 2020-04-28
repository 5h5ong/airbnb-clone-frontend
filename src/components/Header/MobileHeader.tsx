import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ReactComponent as AirbnbHeartIcon } from '../../shared/icons/AirbnbHeartIcon.svg';
import { ReactComponent as AirbnbIcon } from '../../shared/icons/AirbnbIcon.svg';
import { ReactComponent as AirbnbUserIcon } from '../../shared/icons/AirbnbUserIcon.svg';
import ItemContainer from '../Wrappers/ItemContainer';

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 65px;
  background-color: white;
  /* 헤더 상단의 border */
  border-top: 1px solid rgb(221, 221, 221);
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const MobileHeader: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <ItemContainer text="둘러보기" color={pathname === '/'}>
          <AirbnbIcon />
        </ItemContainer>
        <ItemContainer text="저장 목록">
          <AirbnbHeartIcon />
        </ItemContainer>
        <ItemContainer text="로그인">
          <AirbnbUserIcon />
        </ItemContainer>
      </Header>
    </Container>
  );
};

export default MobileHeader;
