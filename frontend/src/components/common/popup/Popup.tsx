import React from 'react';
import { useSelector } from 'react-redux';
import { selectNumberButtonPopup } from '../../../features/popup/popupSlice';
import './style.css';

const Popup = () => {
  const numberButton = useSelector(selectNumberButtonPopup);
  return (
    <>
      <div className='popup__container'>
        <div className='popup__box'>
          <div className='popup__text'>Text</div>
          <div className='popup__button'>
            {numberButton === 2 && <div className='popup__button--item popup__cancel'>Huỷ</div>}
            <div className='popup__button--item popup__success'>Xác nhận</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
