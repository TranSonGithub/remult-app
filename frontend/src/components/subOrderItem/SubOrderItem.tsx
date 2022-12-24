import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const SubOrderItem = (props: any) => {
  const { name, price, option, size } = props;
  return (
    <div className='subOrderItem__container'>
      <div className='cartItem__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='subOrderItem__content'>
        <div className='text__title--primary subOrderItem__title'>{name}</div>
        <div className='subOrderItem__'>{`${size.name}/${size.size} cm, ${option && 'Thêm phô mai'}`}Thêm phô mai</div>
      </div>
      <div className='text__title--primary menuPage__charge subOrderItem__total'>
        <p>{price}</p>
        <i>(x2)</i>
      </div>
    </div>
  );
};

export default SubOrderItem;
