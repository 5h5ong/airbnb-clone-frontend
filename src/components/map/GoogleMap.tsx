import React, { useEffect, useRef, useState } from 'react';
import scriptMaker from '../../Functions/scriptMaker';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const map = () => {
    if (mapRef.current) {
      return new window.google.maps.Map(mapRef.current, {
        center: { lat: 36, lng: 128 },
        zoom: 15,
      });
    }
    return true;
  };

  const initMap = () => {
    map();
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

  return !loading ? (
    <div className="map" ref={mapRef} style={{ width: '100%' }} />
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMap;
