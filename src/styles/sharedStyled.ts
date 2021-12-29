import styled from 'styled-components';

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
