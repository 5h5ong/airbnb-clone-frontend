import React from 'react';
import styled from 'styled-components';
import ImageCard from '../../components/Cards/ImageCard';
import Linker from '../../components/Wrappers/Linker';

const FirstSection = styled.div`
  height: 100vh;
  /* public directory로 접근하려면 그냥 파일 이름만 써주면 됨 */
  background-image: url('home-image.webp');
  background-size: cover;
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

const Home: React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection>
        <ImageSection>
          <Linker link="/experiences">
            <ImageCard
              image={`${process.env.PUBLIC_URL}/9882b52e-769b-4af6-84fe-58aabaf4b290.jpg`}
              title="온라인 체험"
              description="세계 각지의 호스트가 진행하고 모두 함께하는 독특한 체험을 즐겨보세요."
            />
          </Linker>
          <Linker link="/accommodations">
            <ImageCard
              image={`${process.env.PUBLIC_URL}/56e33ab9-d581-4333-be11-69286231cee5.jpg`}
              title="숙소"
              description="타지에서의 환상적인 경험을 즐겨보세요."
            />
          </Linker>
        </ImageSection>
      </SecondSection>
    </div>
  );
};

export default Home;
