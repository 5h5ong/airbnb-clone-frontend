import React from 'react';
import useInput from '../../hooks/useInput';
import RegisterPresenter from './RegisterPresenter';

const RegisterContainer: React.FC = () => {
  const email = useInput();
  const password = useInput();
  const firstName = useInput();
  const lastName = useInput();

  return (
    <RegisterPresenter
      email={email.props}
      firstName={firstName.props}
      lastName={lastName.props}
      password={password.props}
    />
  );
};

export default RegisterContainer;
