import React from 'react';
import CartItem from '../../components/cartItem/CartItem';
import './style.css';
import { Link } from 'react-router-dom';
import { routerUser } from '../../utils/route';
import { mockCarts } from '../../mock/cart';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cart/cartSlice';

const CartPage = () => {
  const cartList = useSelector(selectCartItems);

  console.log('cartList', cartList);
  const total = cartList.reduce((total, cart: any) => {
    return total + cart.total;
  }, 0);

  return (
    <div className='menuPage__container'>
      <div className='text__title cartPage__title'>Giỏ hàng của bạn</div>
      <div className='cartPage__listItem'>
        {cartList.map((e: any, idx) => (
          <CartItem {...e} key={idx} />
        ))}
      </div>
      <div className='menuPage__charge'>
        <div className='text__title--primary charge__total'>
          <b>Tổng</b>
          <p>{total ? `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000` : '0'} VND</p>
        </div>
        <Link className='charge__button' to={routerUser.charge}>
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
