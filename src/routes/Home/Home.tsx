import React from 'react';
import styled from 'styled-components';
import ImageCard from '../../components/Cards/ImageCard';
import Linker from '../../components/Wrappers/Linker';

const FirstSection = styled.div`
  height: 100vh;
  /* 파일 이름 앞에 '/'를 붙여줘야 함. 아니면 전에 있던 페이지를 기준으로 경로가
     책정되서 '/reservations/file-name.webp'처럼 경로가 바뀌는 대참사가 벌어질
     수도 있음. 주의하시오!! */
  background-image: url('/home-image.webp');
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
