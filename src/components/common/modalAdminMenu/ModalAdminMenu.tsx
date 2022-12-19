import React from 'react';
import iconAddPhoto from '../../../assets/icon/addPhoto.svg';
import './style.css';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../../features/modal/modalSlice';
import { typeModal } from '../../../utils/constants';

const ModalAdminMenu = () => {
  const dispatch = useDispatch();

  const handleHideModalAddMenu = (e: any) => {
    dispatch(modalActions.showModal({ modalAddMenu: { show: false }, type: typeModal.modalAddMenu } as any));
  };

  return (
    <div className='modalBooking__container'>
      <div className='modalAdminMenu__box'>
        <div className='modalAdminMenu__sizeBox'>
          <div className='text__subTitle sizeBox__title'>Size</div>
          <div className='sizeBox__listSize'>
            <div className='sizeBox__item'>
              <input className='sizeBox__itemInput sizeBox__itemName' placeholder='Size S' />
              <select
                id='underline_select'
                className='sizeBox__itemSize block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black-400 dark:border-black-700 focus:outline-none focus:ring-0 focus:border-black-200 peer'
              >
                <option defaultValue='Choose a country'>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
              <div className='sizeBox__itemPrice'>
                <input type='number' className='sizeBox__itemPrice--input' placeholder='Giá tiền' />
                <p className='sizeBox__itemPrice--deno'>VND</p>
              </div>
            </div>
            <button className='sizeBox__btnAdd'>Thêm size</button>
          </div>
        </div>
        <div className='modalAdminMenu__info'>
          <div className='info__header'>
            <div className='info__itemName'>
              <div className='text__subTitle info__title'>Tên Pizza</div>
              <input type='text' className='sizeBox__itemInput info__input' />
            </div>
            <label htmlFor='upload' className='info__avatar'>
              <input id='upload' type='file' />
              <img src={iconAddPhoto} alt='' />
            </label>
          </div>
          <div className='info__description'>
            <div className='text__subTitle info__description--label'>Thành phần</div>
            <textarea className='sizeBox__itemInput info__description--text'></textarea>
          </div>
          <div className='info__btn'>
            <button className='info__btn--cancel' onClick={handleHideModalAddMenu}>
              Huỷ
            </button>
            <button className='info__btn--save'>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminMenu;
