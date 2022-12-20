import React from 'react';
import DownArrow from '../../assets/icon/downArrow.svg';
import './style.css';
import SubOrderItem from '../subOrderItem/SubOrderItem';

const OrderItem = () => {
  return (
    <div className='orderItem__container'>
      <div className='orderItem__header'>
        <div className='header__orderId'>{`Đơn hàng: #22-23987`}</div>
        <div className='header__total'>Tổng tiền: 200.000 VND</div>
        <div className='header__arrow'>
          <img src={DownArrow} alt='' />
        </div>
      </div>
      <div className='orderItem__content'>
        <div className='orderItem__info'>
          <div className='orderItem__info--text info__name'>{`Người nhận: Anh A`}</div>
          <div className='orderItem__info--text info__phoneNumber'>{`Số điện thoại: 0987 765 522`}</div>
          <div className='orderItem__info--text info__location'>{`Địa chỉ: Hà Nội`}</div>
        </div>
        <div className='orderItem__listOrder'>
          <SubOrderItem />
        </div>
        <div className='orderItem__button'>
          <button className='orderItem__button--red'>Huỷ Đơn Hàng</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
