import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const SubOrderItem = () => {
  return (
    <div className='subOrderItem__container'>
      <div className='cartItem__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='subOrderItem__content'>
        <div className='text__title--primary subOrderItem__title'>Pizzal hot</div>
        <div className='subOrderItem__'>Size S/20cm, Thêm phô mai</div>
      </div>
      <div className='text__title--primary menuPage__charge subOrderItem__total'>
        <p>120.000 VND</p>
        <i>(x2)</i>
      </div>
    </div>
  );
};

export default SubOrderItem;
