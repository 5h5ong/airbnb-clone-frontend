import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLayoutEffect } from 'react';
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
  const { error, data, loading, setReload } = useAxios({
    url: 'http://localhost:4000/auth/verify',
    method: 'get',
  });

  useEffect(() => {
    setReload(true);
    console.log('data reload start!!');
  }, [userState.isSignIn]);

  useEffect(() => {
    if (!loading) {
      if (!error.state) {
        setUserState({
          isSignIn: true,
          id: data.id,
          email: data.email,
          role: data.role,
        });
      } else if (error.data.status === '1') {
        setUserState({
          isSignIn: false,
          id: '',
          email: '',
          role: '',
        });
      }
    }
  }, [data, loading]);

  return (
    <div className="App">
      <UserContext.Provider value={{ setUser: setUserState, user: userState }}>
        {loading && 'loading...'}
        {!loading && <Routes />}
      </UserContext.Provider>
    </div>
  );
};

export default App;
