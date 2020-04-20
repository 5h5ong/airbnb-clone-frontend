import React from 'react';
import styled from 'styled-components';

interface IRowsProp {
  center?: boolean;
}

type FlexRowsProp = Pick<IRowsProp, 'center'>;

const FlexRows = styled.div<FlexRowsProp>`
  display: flex;
  flex-direction: row;
  /* center 정렬 적용 */
  ${(props): string =>
    props.center
      ? `justify-content: center;
  align-items: center;`
      : ''}
`;

const Rows: React.FC<IRowsProp> = ({ children, center }) => {
  return <FlexRows center={center}>{children}</FlexRows>;
};

export default Rows;
