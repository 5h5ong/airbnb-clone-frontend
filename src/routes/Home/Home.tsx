import React from 'react';
import styled from 'styled-components';
import ImageCard from '../../components/Cards/ImageCard';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';

const FirstSection = styled.div`
  height: 100vh;
`;
const SecondSection = styled.div`
  /* height: 100rem; */
  margin-top: 2rem;
  margin-left: 72.5px;
  margin-right: 72.5px;
  margin-bottom: 2rem;
`;
const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
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
      <SecondSection>
        <ImageSection>
          <ImageCard
            image={`${process.env.PUBLIC_URL}/9882b52e-769b-4af6-84fe-58aabaf4b290.jpg`}
            title="온라인 체험"
            description="세계 각지의 호스트가 진행하고 모두 함께하는 독특한 체험을 즐겨보세요."
          />
          <ImageCard
            image={`${process.env.PUBLIC_URL}/56e33ab9-d581-4333-be11-69286231cee5.jpg`}
            title="장기 숙박"
            description="세계 각지의 호스트가 진행하고 모두 함께하는 독특한 체험을 즐겨보세요."
          />
        </ImageSection>
      </SecondSection>
    </div>
  );
};

export default WithHeaderPadding(Home);
