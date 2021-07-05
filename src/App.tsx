import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext } from 'react';
import useAxios from './hooks/useAxios';
import Routes from './routes/Routes';

// ? 생년월일은 안넣어도 될 거 같음
interface UserContextType {
  id: string;
  email: string;
  role: string;
  // firstName: string;
  // lastName: string;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const App: React.FC = () => {
  const { error, data, loading } = useAxios({
    url: 'http://localhost:4000/auth/verify',
    method: 'get',
  });

  // data가 존재할 때만 provider에 값 할당
  const providerObject = data && {
    id: data.id,
    email: data.email,
    role: data.role,
  };

  return (
    <div className="App">
      <UserContext.Provider value={providerObject}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
};

export default App;
