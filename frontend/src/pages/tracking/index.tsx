import React from 'react';
import Search from '../../assets/icon/search.svg';
import './style.css';
import OrderItem from '../../components/orderItem/OrderItem';

const TrackingPage = () => {
  return (
    <div className='menuPage__container'>
      <div className='trackingPage__title'>Kiểm tra đơn hàng của bạn</div>
      <div className='trackingPage__phoneNumber'>
        <input type='number' className='phoneNumber__input' placeholder='Nhập số điện thoại của bạn' />
        <div className='phoneNumber__search'>
          <img src={Search} alt='' />
        </div>
      </div>
      <div className='trackingPage__listOrder'>
        <OrderItem />
      </div>
    </div>
  );
};

export default TrackingPage;
