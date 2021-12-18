import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: ${(props) => props.theme.color.mainAirbnbColor};
`;
const AirbnbLogo = styled.div`
  position: absolute;
  width: 900px;
  height: 300px;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  background-image: url('airbnb-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* 보였다가 안보였다가 깜빡이는 효과를 줌 */
  animation: 2s flashing infinite;
  @keyframes flashing {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

/**
 * 로딩 시 표시될 컴포넌트
 *
 * @remarks
 * 커다란 airbnb 로고가 계속 점등함. 항상 전체 페이지에서 중앙에 위치함.
 */
const Loading = () => {
  // return (
  //   <Container>
  //     <AirbnbLogo />
  //   </Container>
  // );
  return <div></div>;
};

export default Loading;
