import React, { useState } from 'react';
import Pizza from '../../assets/image/pizza.png';
import iconThreeDotsVertical from '../../assets/icon/three-dots-vertical.svg';
import './style.css';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../features/modal/modalSlice';
import { typeModal } from '../../utils/constants';
import { TypeModal } from '../../utils/type';

const AdminMenuItem = () => {
  const dispatch = useDispatch();
  const [showModalAction, setShowModalAction] = useState(false);

  const handleShowModalAction = (e: any) => {
    setShowModalAction(!showModalAction);
  };
  const handleShowModalAddMenu = (e: any) => {
    dispatch(modalActions.showModal({ modalAddMenu: { show: true }, type: typeModal.modalAddMenu } as any));
  };

  return (
    <div className='adminMenuItem__container'>
      <div className='adminMenuItem__content'>
        <div className='avatar adminMenuItem__avatar'>
          <img src={Pizza} alt='' />
        </div>
        <div className='adminMenuItem__titleContent'>
          <div className='text__title titleContent__title'>Pizza hot</div>
          <div className='titleContent__price'>20.000 - 25.000</div>
        </div>
        <div className='adminMenuItem__threeDots' onClick={handleShowModalAction}>
          <img src={iconThreeDotsVertical} alt='' />
        </div>
      </div>
      <div className='adminMenuItem__des'>
        <b>Thành phần: </b>
        <p>Xúc xích Salami, hành tây, sốt cà chua, phô mai.</p>
      </div>
      {showModalAction && (
        <div className='modal__action'>
          <div className='modal__action--item modal__action--edit' onClick={handleShowModalAddMenu}>
            Chỉnh sửa
          </div>
          <div className='modal__action--item modal__action--delete'>Xoá</div>
        </div>
      )}
    </div>
  );
};

export default AdminMenuItem;
