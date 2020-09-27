import React from 'react';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import RegisterContainer from './RegisterContainer';

const Index: React.FC = () => {
  return <RegisterContainer />;
};

export default WithHeaderPadding(Index);
