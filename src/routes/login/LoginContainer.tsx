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
  const [isError, setIsError] = useState(false);

  const login = async (): Promise<void> => {
    // data === jwt token
    try {
      setIsLoading(true);
      const data = await requestServer('users/signin', {
        email: email.props.value,
        password: password.props.value,
      });
      setIsLoading(false);
      // 에러가 true일 시, 로그인이 성공했으니 false로 변경
      isError && setIsError(false);

      // 가져온 token을 local storage에 저장
      localStorage.setItem('token', data);
      // user context에 로그인 상태 반영
      userContext?.setUser({ isSignIn: true });

      // Home Page로 이동
      history.push('/');
    } catch (error) {
      // 에러 ON
      setIsError(true);
      // 에러로 로그인 실패 시 로딩 초기화
      setIsLoading(false);
    }
  };

  return (
    <LoginPresenter
      email={email.props}
      password={password.props}
      login={login}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default LoginContainer;
