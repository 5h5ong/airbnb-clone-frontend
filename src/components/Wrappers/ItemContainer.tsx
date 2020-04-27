import React from 'react';
import styled from 'styled-components';

interface IItemContainerProps {
  /** children 아래에 표시될 텍스트 */
  text: string;
  /** 색깔을 바꿀 것인지 */
  color?: boolean;
}
interface ItemContainerStyledProps {
  colorProp?: boolean;
}

const ItemContainerStyled = styled.div<ItemContainerStyledProps>`
  display: flex;
  /* item 간의 간격 조정 */
  flex: 1 1 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 색깔 제어 */
  color: ${(props): string =>
    props.colorProp ? props.theme.color.mainAirbnbColor : ''};
  &:hover {
    color: ${(props): string => props.theme.color.mainAirbnbColor};
  }
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
const HeaderText = styled.div`
  margin-top: 8px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  max-height: 24px;
`;

/**
 * children(svg component)와 텍스트를 간단히 관리할 수 있게 만든 wrapper
 */
const ItemContainer: React.FC<IItemContainerProps> = ({
  text,
  children,
  color,
}) => {
  return (
    <ItemContainerStyled colorProp={color}>
      <Icon>{children}</Icon>
      <HeaderText>{text}</HeaderText>
    </ItemContainerStyled>
  );
};

export default ItemContainer;
