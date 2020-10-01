import React from 'react';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import LoginContainer from './LoginContainer';

const Index: React.FC = () => {
  return <LoginContainer />;
};

export default WithHeaderPadding(Index);
