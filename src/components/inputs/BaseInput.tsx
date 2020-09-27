import React from 'react';
import styled from 'styled-components';

interface BaseInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid #e0e0e0;
  line-height: 24px;
  font-size: 16px;
  padding: 11px;
  border-radius: 4px;
  &:focus {
    border: 1px solid #484848;
  }
`;

const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Container>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  );
};

export default BaseInput;
