import React from 'react';
import styled from 'styled-components';

const FirstSection = styled.div`
  height: 100vh;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <div>
      <FirstSection>
        <Img
          src={`${process.env.PUBLIC_URL}/a76de86e-a94a-4863-adb7-e8a86be06290.jpg`}
          alt=""
        />
      </FirstSection>
    </div>
  );
};

export default Home;
