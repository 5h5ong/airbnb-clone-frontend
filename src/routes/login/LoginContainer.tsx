import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import requestServer from '../../Functions/data/requestServer';
import useInput from '../../hooks/useInput';
import LoginPresenter from './LoginPresenter';

const LoginContainer: React.FC = () => {
  const history = useHistory();

  const email = useInput();
  const password = useInput();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (): Promise<void> => {
    setIsLoading(true);
    const data = await requestServer('users/signin', {
      email: email.props.value,
      password: password.props.value,
    });
    console.log({ data });
    setIsLoading(false);

    // 가져온 token을 local storage에 저장
    localStorage.setItem('token', data);

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
