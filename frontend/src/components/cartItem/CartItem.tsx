import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import Number from '../common/number/Number';
import './style.css';

const CartItem = (props: any) => {
  const { name, size, option, number } = props;
  console.log(props, props.name);
  return (
    <div className='cartItem__container'>
      <div className='cartItem__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='cartItem__content'>
        <div className='text__title--primary cartItem__title'>{name}</div>
        <div className='cartItem__text'>Size S/20 cm</div>
        <div className='cartItem__text'>{option}</div>
        <div className='cartItem__action'>
          <div className='action__edit'>Chỉnh sửa</div>
          <div className='action__delete'>Xoá</div>
        </div>
      </div>
      <div className='cartItem__number'>
        <Number />
      </div>
    </div>
  );
};

export default CartItem;
