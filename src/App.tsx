import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useMemo, useState } from 'react';
import { useEffect } from 'react';
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
    url: 'auth/verify',
    method: 'get',
  });
  const memoIsSignIn = useMemo(() => userState.isSignIn, [userState.isSignIn]);
  const memoData = useMemo(() => data, [data]);
  const memoLoading = useMemo(() => loading, [loading]);

  useEffect(() => {
    memoIsSignIn && setReload(true);
    console.log(`isSignIn: ${memoIsSignIn}`);
  }, [memoIsSignIn]);

  useEffect(() => {
    if (!memoLoading) {
      console.log(`[App] useEffect Evoked`);
      console.log(`[App] ${loading} ${memoLoading}`);
      if (!error.state) {
        setUserState({
          isSignIn: true,
          id: memoData.id,
          email: memoData.email,
          role: memoData.role,
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
  }, [memoData, memoLoading]);

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
