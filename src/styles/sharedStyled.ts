import styled from 'styled-components';
import { BaseButtonStyle } from '../components/Buttons/BaseButton';

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

/**
 * 텍스트 위에 설명이 적혀있는 스타일 컴포넌트
 */
export const TextWithDescription = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto auto;
  grid-row-gap: 2px;
  .text {
    grid-row: 2/3;
    grid-column: 1/1;
  }
  .description {
    grid-row: 1/2;
    grid-column: 1/1;
    color: gray;
    font-size: 5px;
  }
`;

/**
 * 쉐도우가 적용된 하얀색 박스
 */
export const WhiteBoxWithShadow = styled.div`
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
`;

export const Shadow = styled.div`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
`;

/**
 * 기본 모달
 */
export const BaseModal = styled.div`
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
`;

export const RedButton = styled(BaseButtonStyle)`
  background-color: #ff5a5f;
  color: white;
  font-size: 12pt;
  font-weight: 600;
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 4px,
      rgb(113, 113, 113) 0px 0px 0px 5px,
      rgba(255, 255, 255, 0.5) 0px 0px 0px 6px;
    transition: box-shadow 0.2s ease 0s;
  }
`;

export const GrayButton = styled(BaseButtonStyle)`
  background-color: gray;
  color: white;
  font-size: 12pt;
  font-weight: 600;
`;
