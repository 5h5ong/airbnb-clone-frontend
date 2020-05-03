import React from 'react';
import { useHistory } from 'react-router-dom';

interface LinkerProps {
  /** 이동할 link */
  link: string;
}

/**
 * 감싸진 컴포넌트를 클릭 시 원하는 링크로 이동하게 해줌
 */
const Linker: React.FC<LinkerProps> = ({ link, children }) => {
  const history = useHistory();

  const onClick = (): void => {
    history.push(link);
  };

  return <div onClick={onClick}>{children}</div>;
};

export default Linker;
