import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useDeviceHeight from '../../hooks/useDeviceHeight';
import AccommodationsPresenter from './AccommodationsPresenter';

const AccommodationsContainer: React.FC = () => {
  const { loading, error, data } = useAxios<AccommodationsDataType[]>({
    url: 'accommodations',
  });
  // 전체 화면의 높이를 구해 맵-리스트 컴포넌트로 화면을 꽉 채우기 위함
  const { height } = useDeviceHeight();
  // 스크롤로 지나치게 된 element의 수
  const [passedElementCount, setPassedElementCount] = useState(0);
  // 현재 보여지는 Element
  const [viewportElement, setViewportElement] = useState<
    AccommodationsDataType[]
  >();
  const [listRefState, setListRefState] = useState<HTMLDivElement | null>(null);

  // 보여지는 elements를 viewportElement에 저장
  useEffect(() => {
    if (data && listRefState) {
      const listElementHeight = listRefState.offsetHeight;
      const listElementAmount = Math.round(listElementHeight / 280);
      setViewportElement(
        // slice()는 start, end에서 end 마지막 부분을 포함하지 않음(end-1).
        data.slice(passedElementCount, passedElementCount + listElementAmount)
      );
    }
  }, [data, listRefState, passedElementCount]);

  const onAccommodationsListScroll = () => {
    // scrollTop을 list element의 높이로 나눔.
    // 나눈 값으로 몇 개의 element를 지나갔는지 알 수 있음.
    if (listRefState) {
      // 지나간 스크롤의 높이
      const scrollTop = listRefState.scrollTop;

      // 소수점은 버림. 오직 정수만
      // 소수점이 반영되면 쓸데없는 렌더링이 생김
      scrollTop && setPassedElementCount(Math.round(scrollTop / 280));
    }
  };

  return loading ? (
    <div>'loading...'</div>
  ) : (
    // data의 undefined 타입을 없애구지
    <AccommodationsPresenter
      accommodationsData={data!}
      viewportElement={viewportElement!}
      displayHeight={height}
      onListScroll={onAccommodationsListScroll}
      setListRefState={setListRefState}
    />
  );
};

export default AccommodationsContainer;
