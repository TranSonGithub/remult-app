import React from 'react';
import CartItem from '../../components/cartItem/CartItem';
import './style.css';
import { Link } from 'react-router-dom';
import { routerUser } from '../../utils/route';

const CartPage = () => {
  return (
    <div className='menuPage__container'>
      <div className='text__title cartPage__title'>Giỏ hàng của bạn</div>
      <div className='cartPage__listItem'>
        <CartItem />
      </div>
      <div className='menuPage__charge'>
        <div className='text__title--primary charge__total'>
          <b>Tổng</b>
          <p>200.000 VND</p>
        </div>
        <Link className='charge__button' to={routerUser.charge}>
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
