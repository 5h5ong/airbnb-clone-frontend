import React from 'react';
import styled from 'styled-components';

interface BaseInputProps {
  placeholder?: string;
}

const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  line-height: 24px;
  font-size: 16px;
  padding: 11px;
  border-radius: 4px;
`;

const BaseInput: React.FC<BaseInputProps> = ({ placeholder }) => {
  return (
    <Container>
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default BaseInput;
