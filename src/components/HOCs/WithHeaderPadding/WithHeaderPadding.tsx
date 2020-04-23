import React from 'react';
import styled from 'styled-components';

const HeaderPadding = styled.div`
  padding-top: 80px;
`;
const WithHeaderPadding = (
  Components: React.ComponentType
): React.FC => (): React.ReactElement => {
  return (
    <HeaderPadding>
      <Components />
    </HeaderPadding>
  );
};

export default WithHeaderPadding;
