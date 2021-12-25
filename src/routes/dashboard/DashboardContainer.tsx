import React from 'react';
import { useHistory } from 'react-router-dom';
import DashboardPresenter from './DashboardPresenter';

const DashboardContainer: React.FC<DashboardProps> = ({
  email,
  accommodations,
  reservations,
}) => {
  const history = useHistory();

  // ! 너는 나중에 따로 파일 만들어서 분가하자
  /**
   * 페이지의 링크를 변경함.
   * @param root 가고자 할 페이지의 루트 경로(accommodation, reservation)
   * @param id 가고자 할 페이지의 아이디
   */
  const changeHistory = (
    root: 'accommodations' | 'reservation',
    goto: string
  ) => {
    const link = root.concat('/', goto);
    history.push(link);
  };

  return (
    <DashboardPresenter
      email={email}
      accommodations={accommodations}
      reservations={reservations}
      changeHistory={changeHistory}
    />
  );
};

export default DashboardContainer;
