import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 65px;
  background-color: white;
  /* 헤더 상단의 border */
  border-top: 1px solid black;
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
const ItemContainer = styled.div`
  display: flex;
  /* item 간의 간격 조정 */
  flex: 1 1 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const HeaderText = styled.div`
  margin-top: 8px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  max-height: 24px;
`;

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <Header>
        <ItemContainer>
          <Icon src="/AirbnbIcon.svg" />
          <HeaderText>둘러보기</HeaderText>
        </ItemContainer>
        <ItemContainer>
          <Icon src="/AirbnbHeart.svg" />
          <HeaderText>저장 목록</HeaderText>
        </ItemContainer>
        <ItemContainer>
          <Icon src="/AirbnbUser.svg" />
          <HeaderText>로그인</HeaderText>
        </ItemContainer>
      </Header>
    </Container>
  );
};

export default MobileHeader;
