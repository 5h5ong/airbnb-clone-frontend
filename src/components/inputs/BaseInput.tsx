import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface BaseInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  required?: boolean;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  /* div와 같은 엘리먼트에서 포커스를 사용할 때는 이걸 쓰세요 */
  &:focus-within {
    border: 1px solid #484848;
  }
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  line-height: 24px;
  font-size: 16px;
  padding: 11px;
  border-radius: 4px;
`;
const Prefix = styled.span`
  display: flex;
  margin-left: 10px;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
`;

const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  value,
  type,
  onChange,
  prefix,
  required,
}) => {
  return (
    <Container>
      {/* 인풋 텍스트 앞에 꾸며줄 텍스트를 집어넣음 */}
      {prefix && <Prefix>{prefix}</Prefix>}
      <Input
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
      />
    </Container>
  );
};

export default BaseInput;
