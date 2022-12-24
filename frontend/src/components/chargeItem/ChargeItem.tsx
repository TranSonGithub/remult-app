import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const ChargeItem = (props: any) => {
  const { name, price, number } = props;
  return (
    <div className='chargeItem__container'>
      <div className='chargeItem__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='chargeItem__content'>
        <div className='chargeItem__title'>{name}</div>
        <div className='chargeItem__text'>
          <p>{price}</p>
          <i>{` (x2)`}</i>
        </div>
      </div>
    </div>
  );
};

export default ChargeItem;
