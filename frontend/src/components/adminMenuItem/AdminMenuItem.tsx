import React, { useEffect, useState } from 'react';
import Pizza from '../../assets/image/pizza.png';
import iconThreeDotsVertical from '../../assets/icon/three-dots-vertical.svg';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../features/modal/modalSlice';
import { typeMenu, typeModal } from '../../utils/constants';
import { TypeModal } from '../../utils/type';
import { menuActions, selectMenuList } from '../../features/menu/menuSlice';
import { loadingActions } from '../../features/loading/loading';

const AdminMenuItem = (props: any) => {
  const { name, img, description, sizes, type, _id } = props.item;
  const newSizes = [...sizes].sort((a: any, b: any) => Number(a.price) - Number(b.price));
  const menu = useSelector(selectMenuList);

  const dispatch = useDispatch();
  const [showModalAction, setShowModalAction] = useState(false);

  const handleShowModalAction = (e: any) => {
    setShowModalAction(!showModalAction);
  };
  const handleShowModalAddMenu = (e: any) => {
    dispatch(
      modalActions.showModal({
        modalAddMenu: { show: true, itemUpdate: { _id, name, img, description, sizes, type } },
        type: typeModal.modalAddMenu,
      } as any)
    );
  };
  const handleDeleteMenu = (e: any) => {
    dispatch(
      menuActions.deleteMenu({
        _id,
      })
    );
    dispatch(loadingActions.changeLoading({ show: true }));
  };
  useEffect(() => {
    setShowModalAction(false);
  }, [menu]);

  return (
    <div className='adminMenuItem__container'>
      <div className='adminMenuItem__content'>
        <div className='avatar adminMenuItem__avatar'>
          <img src={img || Pizza} alt='' />
        </div>
        <div className='adminMenuItem__titleContent'>
          <div className='text__title titleContent__title'>{name}</div>
          <div className='titleContent__price'>
            {type === typeMenu.main
              ? `${newSizes[0]?.price} - ${newSizes[sizes.length - 1]?.price}`
              : `${newSizes[0]?.price}`}
          </div>
        </div>
        <div className='adminMenuItem__threeDots' onClick={handleShowModalAction}>
          <img src={iconThreeDotsVertical} alt='' />
        </div>
      </div>
      <div className='adminMenuItem__des'>
        <b>Thành phần: </b>
        <p>{description}</p>
      </div>
      {showModalAction && (
        <div className='modal__action'>
          <div className='modal__action--item modal__action--edit' onClick={handleShowModalAddMenu}>
            Chỉnh sửa
          </div>
          <div className='modal__action--item modal__action--delete' onClick={handleDeleteMenu}>
            Xoá
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenuItem;
