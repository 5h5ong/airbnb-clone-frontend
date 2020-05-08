import React from 'react';
import { useLocation } from 'react-router-dom';
import checkDevice from '../../Functions/checkDevice';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import useDeviceWidth from '../../hooks/useDeviceWidth';

/**
 * Desktop, Mobile에 적절한 Header Component를 반환함
 */
const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { width } = useDeviceWidth();
  const { type: deviceType } = checkDevice(width);

  if (pathname === '/experiences') {
    return (
      <div>
        {deviceType === 'desktop' ? (
          <DesktopHeader transparency />
        ) : (
          <MobileHeader />
        )}
      </div>
    );
  }
  return (
    <div>{deviceType === 'desktop' ? <DesktopHeader /> : <MobileHeader />}</div>
  );
};

export default Header;
