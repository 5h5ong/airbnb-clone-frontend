import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import requestServer from '../../Functions/data/requestServer';
import useInput from '../../hooks/useInput';
import LoginPresenter from './LoginPresenter';

const LoginContainer: React.FC = () => {
  const history = useHistory();

  const userContext = useContext(UserContext);

  const email = useInput();
  const password = useInput();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (): Promise<void> => {
    setIsLoading(true);
    // data === jwt token
    const data = await requestServer('users/signin', {
      email: email.props.value,
      password: password.props.value,
    });
    setIsLoading(false);

    // 가져온 token을 local storage에 저장
    localStorage.setItem('token', data);
    // user context에 로그인 상태 반영
    userContext?.setUser({ isSignIn: true });

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
