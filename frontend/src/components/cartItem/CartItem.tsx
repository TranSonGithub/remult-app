import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import { typeMenu } from '../../utils/constants';
import Number from '../common/number/Number';
import './style.css';

const CartItem = (props: any) => {
  const { img, name, size, option, number, type } = props;
  console.log(props, props.name);
  return (
    <div className='cartItem__container'>
      <div className='cartItem__avatar'>
        <img src={img || Pizza} alt='' />
      </div>
      <div className='cartItem__content'>
        <div className='text__title--primary cartItem__title'>{name}</div>
        {type === typeMenu.main && <div className='cartItem__text'>{`${size.name}/${size.size} cm`}</div>}
        {type === typeMenu.main && <div className='cartItem__text'>{`${option.name}: ${option.price}`}</div>}
        <div className='cartItem__action'>
          <div className='action__delete'>Xoá</div>
        </div>
      </div>
      <div className='cartItem__number'>
        <Number number={number} />
      </div>
    </div>
  );
};

export default CartItem;
