import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useMemo, useState } from 'react';
import { useEffect } from 'react';
import Loading from './components/Loading';
import useAxios from './hooks/useAxios';
import Routes from './routes/Routes';

// ? 생년월일은 안넣어도 될 거 같음
interface UserStateType {
  isSignIn?: boolean;
  id?: string;
  email?: string;
  role?: string;
}
interface UserContextType {
  user: UserStateType;
  setUser: React.Dispatch<React.SetStateAction<UserStateType>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserStateType>({
    isSignIn: false,
    id: '',
    email: '',
    role: '',
  });
  /**
   * @remarks
   * State들은 리프레시가 일어날 때 모두 날라감. 이 때 유저 상태도 같이 날라가면서 로그인이 풀림.
   * 이를 막기 위해 리프레시에도 날라가지 않는 local storage의 token을 이용해 백엔드에 verify 요청을 날림.
   * 요청이 성공했다면 유저 정보를 얻을 수 있음. 이 정보를 다시 유저 상태에 넣어 리프레시가 생겨도
   * 로그인을 유지하는거임.
   */
  const { error, data, loading } = useAxios<UserStateType>({
    url: 'auth/verify',
    method: 'get',
    start: 'now',
    blocking: !localStorage.getItem('token'),
  });
  const memoData = useMemo<UserStateType | undefined>(() => data, [data]);
  const memoLoading = useMemo(() => loading, [loading]);

  useEffect(() => {
    if (!memoLoading && !error.state && memoData) {
      console.log(`[App] useEffect Evoked`);
      console.log(`[App] ${loading} ${memoLoading}`);
      setUserState({
        isSignIn: true,
        id: memoData.id,
        email: memoData.email,
        role: memoData.role,
      });
    }
  }, [memoData, memoLoading]);

  return (
    <div className="App">
      <UserContext.Provider value={{ setUser: setUserState, user: userState }}>
        {memoLoading && <Loading />}
        {!memoLoading && <Routes />}
      </UserContext.Provider>
    </div>
  );
};

export default App;
