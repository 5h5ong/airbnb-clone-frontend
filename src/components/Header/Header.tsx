import React from 'react';
import styled from 'styled-components';
import useScroll from '../../hooks/useScroll';

const HeaderBase = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
`;
const HeaderContainerFirst = styled(HeaderBase)`
  background-color: black;
  /* opacity: 0.1; */
  color: white;
`;
const HeaderContainerSecond = styled(HeaderBase)`
  background-color: height;
  color: black;
`;

const Header: React.FC = () => {
  const { verticalScroll } = useScroll();
  return verticalScroll === 0 ? (
    <HeaderContainerFirst>{verticalScroll}</HeaderContainerFirst>
  ) : (
    <HeaderContainerSecond>Header is Changed!</HeaderContainerSecond>
  );
};

export default Header;
