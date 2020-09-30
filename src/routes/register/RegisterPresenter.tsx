import React from 'react';
import styled from 'styled-components';
import RedButton from '../../components/Buttons/RedButton';
import BaseInput from '../../components/inputs/BaseInput';
import BaseSelect, { SelectOptions } from '../../components/inputs/BaseSelect';
import ColumnSpaceWrapper from '../../components/Wrappers/ColumnSpaceWrapper';
import RowSpaceWrapper from '../../components/Wrappers/RowSpaceWrapper';
import { range, reverseRange } from '../../Functions/utils';
import { UseInputReturnPropsType } from '../../hooks/useInput';

interface RegisterPresenterProps {
  email: UseInputReturnPropsType;
  password: UseInputReturnPropsType;
  firstName: UseInputReturnPropsType;
  lastName: UseInputReturnPropsType;
  year: UseInputReturnPropsType;
  month: UseInputReturnPropsType;
  day: UseInputReturnPropsType;
  register: () => Promise<void>;
}

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  flex-direction: colvmn;
  justify-content: center;
  align-items: center;
`;
const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;

/* 생년월일 Select를 위한 options array 생성 */
// 해당 년도를 기준으로 뒤의 년도 생성
const yearOptions: SelectOptions = reverseRange(
  50,
  new Date().getFullYear()
).map((year) => ({
  value: `${year}`,
  content: `${year}`,
}));
const monthOptions: SelectOptions = range(12, 1).map((month) => ({
  value: `${month}`,
  content: `${month}`,
}));
const dayOptions: SelectOptions = range(31, 1).map((day) => ({
  value: `${day}`,
  content: `${day}`,
}));

const RegisterPresenter: React.FC<RegisterPresenterProps> = ({
  register,
  email,
  password,
  firstName,
  lastName,
  year,
  month,
  day,
}) => {
  return (
    <Container>
      <RegisterFormContainer>
        <ColumnSpaceWrapper gap={15}>
          <Title>회원가입</Title>
          <ColumnSpaceWrapper gap={20}>
            <BaseInput
              placeholder="이메일 주소"
              value={email.value}
              onChange={email.onChange}
            />
            <BaseInput
              placeholder="이름"
              value={firstName.value}
              onChange={firstName.onChange}
            />
            <BaseInput
              placeholder="성"
              value={lastName.value}
              onChange={lastName.onChange}
            />
            <BaseInput
              placeholder="password"
              value={password.value}
              onChange={password.onChange}
            />
            <RowSpaceWrapper gap={10}>
              <BaseSelect
                placeholder="년"
                options={yearOptions}
                value={year.value}
                onChange={year.onChange}
              />
              <BaseSelect
                placeholder="월"
                options={monthOptions}
                value={month.value}
                onChange={month.onChange}
              />
              <BaseSelect
                placeholder="일"
                options={dayOptions}
                value={day.value}
                onChange={day.onChange}
              />
            </RowSpaceWrapper>
          </ColumnSpaceWrapper>
          <RedButton onClick={register}>회원가입</RedButton>
        </ColumnSpaceWrapper>
      </RegisterFormContainer>
    </Container>
  );
};

export default RegisterPresenter;
