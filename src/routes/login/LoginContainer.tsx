import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendDataToServer } from '../../Functions/data/sendDataToServer';
import useInput from '../../hooks/useInput';
import LoginPresenter from './LoginPresenter';

const LoginContainer: React.FC = () => {
  const history = useHistory();

  const email = useInput();
  const password = useInput();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (): Promise<void> => {
    setIsLoading(true);
    const data = await sendDataToServer('http://localhost:4000/verify/user', {
      email: email.props.value,
      password: password.props.value,
    });
    setIsLoading(false);

    // 가져온 token을 local storage에 저장
    localStorage.setItem('token', data.data.token);

    // Home Page로 이동
    history.push('/');
  };

  return (
    <LoginPresenter
      email={email.props}
      password={password.props}
      login={login}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
