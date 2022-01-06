import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { BaseButtonStyle } from './BaseButton';

interface GrayButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

const Button = styled(BaseButtonStyle)`
  background-color: gray;
  color: white;
  font-size: 12pt;
  font-weight: 600;
`;

const GrayButton: React.FC<GrayButtonProps> = ({
  children,
  onClick,
  isLoading,
}) => {
  if (!isLoading) {
    return <Button onClick={onClick}>{children}</Button>;
  } else {
    return (
      <Button>
        <Spinner animation="border" />
      </Button>
    );
  }
};

export default GrayButton;
