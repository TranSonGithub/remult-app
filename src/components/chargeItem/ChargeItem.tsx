import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const ChargeItem = () => {
  return (
    <div className='chargeItem__container'>
      <div className='chargeItem__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='chargeItem__content'>
        <div className='chargeItem__title'>Pizzal hot</div>
        <div className='chargeItem__text'>
          <p>120.000 VND</p>
          <i>{` (x2)`}</i>
        </div>
      </div>
    </div>
  );
};

export default ChargeItem;
