import React from 'react';
import { v4 as uuid } from 'uuid';
import PageLayoutWithImage from '../../components/Layouts/PageLayoutWithImage';
import ViewCard, { ViewCardProps } from '../../components/Cards/ViewCard';
import CardWrapper from '../../components/Wrappers/CardWrapper';

interface OnlineExperiencePresenterProps {
  data: ViewCardProps[] | undefined;
}

const OnlineExperiencePresenter: React.FC<OnlineExperiencePresenterProps> = ({
  data,
}) => {
  return (
    <PageLayoutWithImage
      image="experiencesPageImage.jpg"
      subTitle="새로워진 에어비엔비 체험"
      title="온라인 체험"
      description="모두가 함께 즐기는 세계 각지의 즐거운 체험"
    >
      <CardWrapper>
        {data &&
          data.map((d) => (
            <ViewCard
              key={uuid()}
              image={d.image}
              country={d.country}
              name={d.name}
              price={d.price}
            />
          ))}
      </CardWrapper>
    </PageLayoutWithImage>
  );
};

export default OnlineExperiencePresenter;
