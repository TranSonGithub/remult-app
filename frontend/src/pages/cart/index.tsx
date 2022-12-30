import React, { useEffect, useState } from 'react';
import CartItem from '../../components/cartItem/CartItem';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { routerUser } from '../../utils/route';
import { mockCarts } from '../../mock/cart';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, selectCartItems } from '../../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartItems);
  const navigate = useNavigate();
  console.log('[CartPage] cartList', cartList);

  const stateTotal = cartList.reduce((total, cart: any) => {
    return total + cart.total * cart.number;
  }, 0);
  console.log('[CartPage] stateTotal', stateTotal);

  const [total, setTotal] = useState(stateTotal);
  const [newCart, setNewCart] = useState(cartList);

  const handleChangeCart = (item: any, nb: any) => {
    let itemCart = 0;
    const arrCart: any = cartList.map((e: any) => {
      if (e.item === item) {
        itemCart = e.total;
        return {
          ...e,
          number: e.number + 1,
        };
      }
      return e;
    });
    setNewCart(arrCart);
    setTotal(total + itemCart * nb);
  };

  const handleChargeCart = (e: any) => {
    if (total !== 0) {
      navigate(routerUser.charge);
      dispatch(cartActions.changeCart({ items: newCart }));
    }
  };

  useEffect(() => {
    setTotal(stateTotal);
  }, [stateTotal]);

  return (
    <div className='menuPage__container'>
      <div className='text__title cartPage__title'>Giỏ hàng của bạn</div>
      <div className='cartPage__listItem'>
        {cartList.map((e: any, idx) => (
          <CartItem {...e} key={idx} handleChangeCart={handleChangeCart} />
        ))}
      </div>
      <div className='menuPage__charge'>
        <div className='text__title--primary charge__total'>
          <b>Tổng</b>
          <p>{total ? `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000` : '0'} VND</p>
        </div>
        <div className='charge__button cursor-pointer' onClick={handleChargeCart}>
          Thanh toán
        </div>
      </div>
    </div>
  );
};

export default CartPage;
