import React from 'react';
import styled from 'styled-components';

interface IRowsProp {
  center?: boolean;
  margin?: boolean;
}

type FlexRowsProp = Pick<IRowsProp, 'center' | 'margin'>;

const FlexRows = styled.div<FlexRowsProp>`
  display: flex;
  flex-direction: row;
  /* center 정렬 적용 */
  ${(props): string =>
    props.center
      ? `justify-content: center;
  align-items: center;`
      : ''}
  /* margin  적용 */
  & > *:not(:last-child) {
    margin-right: ${(props): string => (props.margin ? `5px` : `0px`)};
  }
`;

const Rows: React.FC<IRowsProp> = ({ children, center, margin }) => {
  return (
    <FlexRows center={center} margin={margin}>
      {children}
    </FlexRows>
  );
};

export default Rows;
