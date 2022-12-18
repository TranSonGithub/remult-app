import React from 'react';
import './style.css';

const Popup = () => {
  return (
    <>
      <div className='popup__container'>
        <div className='popup__box'>
          <div className='popup__text'>Text</div>
          <div className='popup__button'>
            <div className='popup__button--item popup__cancel'>Huỷ</div>
            <div className='popup__button--item popup__success'>Xác nhận</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
