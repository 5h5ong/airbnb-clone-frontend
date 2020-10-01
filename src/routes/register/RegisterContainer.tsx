import React from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import RegisterPresenter from './RegisterPresenter';
import { HelloLocationState } from '../hello/Hello';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';

const RegisterContainer: React.FC = () => {
  const history = useHistory<HelloLocationState>();
  const email = useInput();
  const password = useInput();
  const firstName = useInput();
  const lastName = useInput();
  const year = useInput();
  const month = useInput();
  const day = useInput();

  const register = async (): Promise<void> => {
    try {
      await sendDataToServer('http://localhost:4000/create/user', {
        email: email.props.value,
        password: password.props.value,
        firstName: firstName.props.value,
        lastName: lastName.props.value,
        birthYear: Number(year.props.value),
        birthMonth: Number(month.props.value),
        birthDay: Number(day.props.value),
      });
      // 회원가입 후 유저 데이터를 웰컴 페이지로 전달 및 이동
      history.push({
        pathname: '/hello',
        state: {
          userInfo: {
            lastName: lastName.props.value,
            firstName: firstName.props.value,
            email: email.props.value,
          },
        },
      });
    } catch (error) {
      throw new Error('데이터 전송에 실패했습니다.');
    }
  };

  return (
    <RegisterPresenter
      register={register}
      email={email.props}
      firstName={firstName.props}
      lastName={lastName.props}
      password={password.props}
      year={year.props}
      month={month.props}
      day={day.props}
    />
  );
};

export default RegisterContainer;
