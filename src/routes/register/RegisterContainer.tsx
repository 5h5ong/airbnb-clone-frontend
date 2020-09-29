import React from 'react';
import useInput from '../../hooks/useInput';
import RegisterPresenter from './RegisterPresenter';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';

const RegisterContainer: React.FC = () => {
  const email = useInput();
  const password = useInput();
  const firstName = useInput();
  const lastName = useInput();

  const register = async (): Promise<void> => {
    await sendDataToServer('http://localhost:4000/create/user', {
      email: email.props.value,
      password: password.props.value,
      firstName: firstName.props.value,
      lastName: lastName.props.value,
      birthYear: 2000,
      birthMonth: 2,
      birthDay: 17,
    });
  };

  return (
    <RegisterPresenter
      register={register}
      email={email.props}
      firstName={firstName.props}
      lastName={lastName.props}
      password={password.props}
    />
  );
};

export default RegisterContainer;
