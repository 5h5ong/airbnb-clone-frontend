import React from 'react';
import checkDevice from '../../Functions/checkDevice';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import useDeviceWidth from '../../hooks/useDeviceWidth';

/**
 * Desktop, Mobile에 적절한 Header Component를 반환함
 */
const Header: React.FC = () => {
  const { width } = useDeviceWidth();
  console.log(width);
  const { type: deviceType } = checkDevice(width);
  console.log(deviceType);

  return (
    <div>{deviceType === 'desktop' ? <DesktopHeader /> : <MobileHeader />}</div>
  );
};

export default Header;
