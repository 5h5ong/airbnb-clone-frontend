import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import requestServer from '../../Functions/data/requestServer';
import DashboardPresenter from './DashboardPresenter';

const DashboardContainer: React.FC<DashboardProps> = ({
  email,
  accommodations,
  reservations,
}) => {
  const history = useHistory();

  const [accommodationsState, setAccommodationsState] = useState(
    accommodations
  );

  /**
   * 페이지의 링크를 변경함.
   * @param root 가고자 할 페이지의 루트 경로(accommodation, reservation)
   * @param id 가고자 할 페이지의 아이디
   *
   * ! 너는 나중에 따로 파일 만들어서 분가하자
   */
  const changeHistory = (
    root: 'accommodations' | 'reservation',
    goto: string
  ) => {
    const link = root.concat('/', goto);
    history.push(link);
  };

  /**
   * 숙소를 삭제
   * @param accommodationId 삭제할 숙소의 아이디
   */
  const deleteAccommodation = async (accommodationId: string) => {
    // 상태에서 숙소 삭제
    setAccommodationsState((state) =>
      state?.filter((accommodation) => accommodation.id !== accommodationId)
    );

    // 백엔드에 삭제 요청
    await requestServer('delete', `accommodations/${accommodationId}`);
  };

  return (
    <DashboardPresenter
      email={email}
      accommodations={accommodationsState}
      reservations={reservations}
      changeHistory={changeHistory}
      deleteAccommodation={deleteAccommodation}
    />
  );
};

export default DashboardContainer;
