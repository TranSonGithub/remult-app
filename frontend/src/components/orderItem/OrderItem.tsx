import React from 'react';
import DownArrow from '../../assets/icon/downArrow.svg';
import './style.css';
import SubOrderItem from '../subOrderItem/SubOrderItem';
import { mockCarts } from '../../mock/cart';

const OrderItem = (props: any) => {
  const { orderId, total, guestInfo, items } = props.orderItem;

  return (
    <div className='orderItem__container'>
      <div className='orderItem__header'>
        <div className='header__orderId'>{`Đơn hàng: #${orderId}`}</div>
        <div className='header__total'>{`Tổng tiền: ${total
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND`}</div>
        <div className='header__arrow'>
          <img src={DownArrow} alt='' />
        </div>
      </div>
      <div className='orderItem__content'>
        <div className='orderItem__info'>
          <div className='orderItem__info--text info__name'>{`Người nhận: ${guestInfo.name}`}</div>
          <div className='orderItem__info--text info__phoneNumber'>{`Số điện thoại:${guestInfo.phoneNumber}`}</div>
          <div className='orderItem__info--text info__location'>{`Địa chỉ: ${guestInfo.address}`}</div>
        </div>
        <div className='orderItem__listOrder'>
          {items.map((e: any, idx: any) => (
            <SubOrderItem {...e} key={idx} />
          ))}
        </div>
        <div className='orderItem__button'>
          <button className='orderItem__button--red'>Huỷ Đơn Hàng</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
