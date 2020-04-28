import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';
import AirbnbLogo from '../../icons/AirbnbLogo';
import HeaderButton from './HeaderButton';

const HeaderBase = styled.div`
  display: flex;
  background-color: #ffffff;
  color: #ff385c;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const HeaderContainerFirst = styled(HeaderBase)``;
const HeaderContainerSecond = styled(HeaderBase)`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

const DesktopHeader: React.FC = () => {
  const { isTop } = useScroll();
  const history = useHistory();

  const onClickLogo = (): void => {
    history.push('/');
  };

  return isTop ? (
    <HeaderContainerFirst>
      <div onClick={onClickLogo}>
        <AirbnbLogo />
      </div>
      <HeaderButton />
    </HeaderContainerFirst>
  ) : (
    <HeaderContainerSecond>
      <div onClick={onClickLogo}>
        <AirbnbLogo />
      </div>
      <HeaderButton />
    </HeaderContainerSecond>
  );
};

export default DesktopHeader;
