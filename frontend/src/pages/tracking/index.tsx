import React, { useEffect, useState } from 'react';
import Search from '../../assets/icon/search.svg';
import './style.css';
import OrderItem from '../../components/orderItem/OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import { loadingActions } from '../../features/loading/loading';
import { cartActions, selectOrders, selectPhoneNumber } from '../../features/cart/cartSlice';
import { popupActions } from '../../features/popup/popupSlice';

const TrackingPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const phoneNumberPayment = useSelector(selectPhoneNumber);

  const [phoneNumber, setPhoneNumber] = useState();

  const handlePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleSearchOrder = (e: any) => {
    dispatch(cartActions.getOrders({ phoneNumber }));
  };

  useEffect(() => {
    console.log(`[TrackingPage] phoneNumber -> ${phoneNumberPayment}`);
    dispatch(loadingActions.changeLoading({ show: true }));
    dispatch(cartActions.getOrders(phoneNumberPayment ? { phoneNumber: phoneNumberPayment } : {}));
    dispatch(popupActions.resetPhoneNumber());
  }, []);

  console.log('orders', orders);

  return (
    <div className='menuPage__container'>
      <div className='trackingPage__title'>Kiểm tra đơn hàng của bạn</div>
      <div className='trackingPage__phoneNumber'>
        <input
          type='text'
          className='phoneNumber__input'
          placeholder='Nhập số điện thoại của bạn'
          onChange={handlePhoneNumber}
        />
        <div className='phoneNumber__search cursor-pointer' onClick={handleSearchOrder}>
          <img src={Search} alt='' />
        </div>
      </div>
      <div className='trackingPage__listOrder'>
        {orders.map((e: any) => {
          return <OrderItem orderItem={e} />;
        })}
      </div>
    </div>
  );
};

export default TrackingPage;
