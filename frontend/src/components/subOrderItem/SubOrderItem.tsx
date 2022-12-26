import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const SubOrderItem = (props: any) => {
  const { img, name, option, sizes, sizeName, number } = props;
  const size = sizes.find((e: any) => e?.name === sizeName);
  return (
    <div className='subOrderItem__container'>
      <div className='cartItem__avatar'>
        <img src={img || Pizza} alt='' />
      </div>
      <div className='subOrderItem__content'>
        <div className='text__title--primary subOrderItem__title'>{name}</div>
        <div className='subOrderItem__'>{`${size?.name}/${size?.size} cm, ${option?.name}`}</div>
      </div>
      <div className='text__title--primary menuPage__charge subOrderItem__total'>
        <p>{(size?.price * number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND</p>
        <i>(x2)</i>
      </div>
    </div>
  );
};

export default SubOrderItem;
