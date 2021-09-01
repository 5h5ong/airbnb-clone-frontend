import React, { useEffect, useRef, useState } from 'react';
import scriptMaker from '../../Functions/scriptMaker';

interface GoogleMapProps {
  /** 마커로 표시될 Element들 */
  inputElement: AccommodationsDataType[];
}

const GoogleMap: React.FC<GoogleMapProps> = ({ inputElement }) => {
  const [loading, setLoading] = useState(true);
  // Map이 표시되는 Div의 ref
  const mapRef = useRef<HTMLDivElement>(null);
  // Google Map을 사용하기 위함
  const mapElement = useRef<google.maps.Map>();
  // 현재 표시된 마커들의 집합 -> 마커 삭제에 사용됨
  const [markers, setMarkers] = useState<google.maps.Marker[]>();

  const map = () => {
    if (mapRef.current) {
      return new window.google.maps.Map(mapRef.current, {
        center: { lat: 36.0860039, lng: 128.35487555 },
        zoom: 17,
      });
    }
  };
  const initMap = () => {
    mapElement.current = map();
  };

  useEffect(() => {
    const fetchScript = async () => {
      try {
        await scriptMaker(
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyCevhU9QWzFf1wSpSRwnD3MnUWnASVdMbk'
        );
        setLoading(false);
      } catch {
        setLoading(true);
      }
    };
    fetchScript();
  }, []);
  useEffect(() => {
    !loading && initMap();
  }, [loading]);

  // inputElement의 lat, lng에 따라 마커 표시
  useEffect(() => {
    // 이미 있던 마커들을 제거
    if (markers) {
      markers.map((marker) => marker.setMap(null));
    }
    // 바뀐 inputElement를 토대로 마커 생성
    if (mapElement && inputElement && window.google) {
      const markers = inputElement.map(({ lat, lng }) => {
        return new window.google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: mapElement.current,
        });
      });
      setMarkers(markers);
    }
  }, [inputElement, window.google]);
  // 마커들이 맵에 전부 보일 수 있게 만듬
  useEffect(() => {
    if (markers) {
      // Bounds 만들기
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(marker.getPosition()!);
      });
      // 맵에 Bounds 반영
      mapElement.current?.fitBounds(bounds);
    }
  }, [markers]);

  return !loading ? (
    <div className="map" ref={mapRef} style={{ width: '100%' }} />
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMap;
