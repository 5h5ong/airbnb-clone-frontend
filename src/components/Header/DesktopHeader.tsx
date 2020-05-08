import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';
import AirbnbLogo from '../../icons/AirbnbLogo';
import HeaderButton from './HeaderButton';

interface DesktopHeaderProps {
  /** 초기 상태를 투명하게 만들 것인지 */
  transparency?: boolean;
}

const HeaderBase = styled.div`
  display: flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  padding-left: 80px;
  padding-right: 80px;
`;
const HeaderContainerTransparency = styled(HeaderBase)`
  background-color: transparent;
  color: white;
`;
const HeaderContainerDefault = styled(HeaderBase)`
  background-color: #ffffff;
  color: #ff385c;
`;
const HeaderContainerShadow = styled(HeaderContainerDefault)`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ transparency }) => {
  const { isTop } = useScroll();
  const history = useHistory();

  const onClickLogo = (): void => {
    history.push('/');
  };

  if (transparency) {
    return isTop ? (
      <HeaderContainerTransparency>
        <div onClick={onClickLogo}>
          <AirbnbLogo />
        </div>
        <HeaderButton />
      </HeaderContainerTransparency>
    ) : (
      <HeaderContainerShadow>
        <div onClick={onClickLogo}>
          <AirbnbLogo />
        </div>
        <HeaderButton />
      </HeaderContainerShadow>
    );
  }
  return isTop ? (
    <HeaderContainerDefault>
      <div onClick={onClickLogo}>
        <AirbnbLogo />
      </div>
      <HeaderButton />
    </HeaderContainerDefault>
  ) : (
    <HeaderContainerShadow>
      <div onClick={onClickLogo}>
        <AirbnbLogo />
      </div>
      <HeaderButton />
    </HeaderContainerShadow>
  );
};

export default DesktopHeader;
