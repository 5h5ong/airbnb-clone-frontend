import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import useDeviceHeight from '../../hooks/useDeviceHeight';
import AccommodationsPresenter from './AccommodationsPresenter';

const AccommodationsContainer: React.FC = () => {
  const { loading, error, data } = useAxios({
    url: 'http://localhost:4000/accommodations',
  });
  // 숙소 리스트의 ref
  const listRef = useRef<HTMLDivElement>(null);
  // 전체 화면의 높이를 구해 맵-리스트 컴포넌트로 화면을 꽉 채우기 위함
  const { height } = useDeviceHeight();
  const [passedElementCount, setPassedElementCount] = useState(0);

  useEffect(() => {
    console.log(`passedElementCount: ${passedElementCount}`);
  }, [passedElementCount]);

  const onAccommodationsListScroll = () => {
    // scrollTop을 list element의 높이로 나눔.
    // 나눈 값으로 몇 개의 element를 지나갔는지 알 수 있음.
    if (listRef) {
      const scrollTop = listRef.current?.scrollTop;
      scrollTop && setPassedElementCount(scrollTop / 280);
    }
  };

  return loading ? (
    <div>'loading...'</div>
  ) : (
    <AccommodationsPresenter
      accommodationsData={data}
      displayHeight={height}
      onListScroll={onAccommodationsListScroll}
      listRef={listRef}
    />
  );
};

export default AccommodationsContainer;
