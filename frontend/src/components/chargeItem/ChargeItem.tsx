import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const ChargeItem = (props: any) => {
  const { img, name, total, number } = props;
  return (
    <div className='chargeItem__container'>
      <div className='chargeItem__avatar'>
        <img src={img || Pizza} alt='' />
      </div>
      <div className='chargeItem__content'>
        <div className='chargeItem__title'>{name}</div>
        <div className='chargeItem__text'>
          <p>{`${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000`}</p>
          <i>{` (x${number})`}</i>
        </div>
      </div>
    </div>
  );
};

export default ChargeItem;
