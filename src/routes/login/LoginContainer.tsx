import React from 'react';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';
import useInput from '../../hooks/useInput';
import LoginPresenter from './LoginPresenter';

const LoginContainer: React.FC = () => {
  const email = useInput();
  const password = useInput();

  const login = async (): Promise<void> => {
    await sendDataToServer('http://localhost:4000/verify/user', {
      email: email.props.value,
      password: password.props.value,
    });
  };

  return (
    <LoginPresenter
      email={email.props}
      password={password.props}
      login={login}
    />
  );
};

export default LoginContainer;
