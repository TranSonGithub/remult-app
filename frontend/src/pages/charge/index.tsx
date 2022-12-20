import React from 'react';
import './style.css';
import ChargeItem from '../../components/chargeItem/ChargeItem';

const ChargePage = () => {
  return (
    <div className='chargePage__container'>
      <div className='chargePage__left'>
        <div className='text__title--primary chargePage__title'>Thanh toán</div>
        <form className='chargePage__form'>
          <input className='chargePage__input chargePage__name' placeholder='Họ và tên' />
          <input className='chargePage__input chargePage__phoneNumber' placeholder='Số điện thoại' />
          <input className='chargePage__input chargePage__address' placeholder='Địa chỉ' />
          <textarea className='chargePage__input chargePage__note' placeholder='Ghi chú cho cửa hàng'></textarea>
        </form>
        <p className='chargePage__text'>Thanh toán khi nhận hàng</p>
        <button className='chargePage__pay'>Đặt hàng</button>
      </div>
      <div className='chargePage__right'>
        <div className='chargePage__listItem'>
          <ChargeItem />
        </div>
        <div className='chargePage__underline'></div>
        <div className='chargePage__total'>
          <b>Tổng</b>
          <p>200.000 VND</p>
        </div>
      </div>
    </div>
  );
};

export default ChargePage;
