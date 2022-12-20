import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import './style.css';

const InfoMap = () => {
  const address = 'Số 352 Đường Bưởi, P.Vĩnh Phúc, Q.Ba Đình, TP.Hà Nội';

  const [location, setLocation] = useState({ lat: 0, lon: 0 } as any);
  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=f8c6c582d1494499a9b177b110869467`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => setLocation({ lat: result.features[0].properties.lat, lon: result.features[0].properties.lon }))
      .catch((error) => console.log('error', error));
  }, []);
  console.log('location', location);

  return (
    <div className='infoMap__container'>
      <div className='infoMap__map'>
        {location.lat > 0 && location.lon > 0 && (
          <Map defaultCenter={[location.lat, location.lon]} defaultZoom={15}>
            <Marker width={50} anchor={[location.lat, location.lon]} />
          </Map>
        )}
      </div>

      <div className='infoMap__content'>
        <p className='text__map content__name'>Công ty TNHH Pizza Gusto Việt Nam Số ĐKKD: 0982547362</p>
        <p className='text__map content__location'>{`Địa Chỉ: ${address}`}</p>
        <p className='text__map content__phoneNumber'>Số điện thoại: 098 7654 321</p>
        <p className='text__map content__email'>Email: lienhepizzagusto@gmail.com</p>
      </div>
    </div>
  );
};

export default InfoMap;
