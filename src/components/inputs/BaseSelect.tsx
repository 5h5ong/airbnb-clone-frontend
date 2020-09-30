import React from 'react';
import styled from 'styled-components';

// Select의 <options>을 표현하는 interface
interface SelectOption {
  value: string;
  content: string;
}
export type SelectOptions = SelectOption[];

interface BaseSelectProps {
  options: SelectOptions;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
`;
const Select = styled.select`
  display: flex;
  padding: 11px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  &:focus {
    border: 1px solid #484848;
  }
`;

// TODO: placeholder 구현
const BaseSelect: React.FC<BaseSelectProps> = ({
  options,
  placeholder,
  onChange,
}) => {
  return (
    <Container>
      <Select placeholder={placeholder} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.content}</option>
        ))}
      </Select>
    </Container>
  );
};

export default BaseSelect;
