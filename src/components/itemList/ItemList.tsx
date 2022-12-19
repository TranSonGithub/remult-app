import React, { useState } from 'react';
import './style.css';
import DownArrow from '../../assets/icon/downArrow.svg';
import UpArrow from '../../assets/icon/upArrow.svg';
import AdminInput from '../common/adminInput/AdminInput';

const ItemList = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleToggleDetail = (e: any) => {
    setShowDetail(!showDetail);
  };

  return showDetail ? (
    <div className='detail__container'>
      <div className='detail__header'>
        <div className='detail__id'>#23-34546</div>
        <div className='detail__action'>Chỉnh sửa</div>
        <div className='detail__arrow' onClick={handleToggleDetail}>
          <img src={UpArrow} alt='' />
        </div>
      </div>
      <div className='detail__item'>
        <AdminInput />
      </div>
    </div>
  ) : (
    <div className='tableList__header tableList__item'>
      <div className='header__id'>#23-34546</div>
      <div className='header__nameCustomer'>Nguyễn Văn A</div>
      <div className='header__phoneNumber'>098 7654 321</div>
      <div className='header__total'>120.000 Đ</div>
      <div className='header__status'>Đang chuẩn bị</div>
      <div className='arrow__item' onClick={handleToggleDetail}>
        <img src={DownArrow} alt='' />
      </div>
    </div>
  );
};

export default ItemList;
