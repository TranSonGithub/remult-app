import React, { useState } from 'react';
import iconAddPhoto from '../../../assets/icon/addPhoto.svg';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, selectModalAddMenu } from '../../../features/modal/modalSlice';
import { typeMenu, typeModal } from '../../../utils/constants';
import SizeItem from './SizeItem';
import { loadingActions } from '../../../features/loading/loading';
import { menuActions } from '../../../features/menu/menuSlice';
import menuApi from '../../../api/menu';
import fileApi from '../../../api/file';
import axiosClient from '../../../api';

const ModalAdminMenu = () => {
  const dispatch = useDispatch();
  const modalAddMenu = useSelector(selectModalAddMenu);
  const { itemUpdate } = modalAddMenu;
  const isUpdate = itemUpdate ? Object.keys(itemUpdate)?.length !== 0 : false;

  const [isChange, setIsChange] = useState(false);
  const [imgItem, setImgItem] = useState(itemUpdate?.img);
  const [previewImgItem, setPreviewImgItem] = useState(itemUpdate?.img);

  const [sizes, setSizes] = useState(itemUpdate?.sizes ? itemUpdate.sizes : [{ name: '', size: 14, price: '' }]);
  const [type, setType] = useState(itemUpdate?.type || typeMenu.main);
  console.log('itemUpdate', itemUpdate);

  const handleHideModalAddMenu = (e: any) => {
    dispatch(modalActions.showModal({ modalAddMenu: { show: false }, type: typeModal.modalAddMenu } as any));
  };

  // Handle form
  const handleUploadImg = (e: any) => {
    console.log(`[ModalAdminMenu][handleUploadImg] e -> ${JSON.stringify(e.target.files.length, null, 2)}`);
    setPreviewImgItem(URL.createObjectURL(e.target.files[0]) as any);
    setImgItem(e.target.files[0]);
    setIsChange(true);
  };
  const handleAddSize = (e: any) => {
    console.log(`[ModalAdminMenu][handleUploadImg]`);
    setSizes([...sizes, { name: '', size: 14, price: '' }]);
  };
  const handleChangeSize = (e: any) => {
    console.log(`[ModalAdminMenu][handleChangeSize] e.value -> ${JSON.stringify(e.target.value, null, 2)}`);
    const index = e.target.name.split('_')[0];
    const key = e.target.name.split('_')[1];
    const size = sizes[index] as any;
    size[key] = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    setSizes(sizes);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { namePizza, descriptionPizza, type } = e.target;
    console.log(
      `[ModalAdminMenu][handleSubmit] namePizza -> ${JSON.stringify(namePizza.value)}, 
        descriptionPizza -> ${JSON.stringify(descriptionPizza.value)} sizes -> ${JSON.stringify(
        sizes,
        null,
        2
      )} type -> ${JSON.stringify(type.value, null, 2)}, imgItem -> ${JSON.stringify(imgItem, null, 2)}`
    );

    dispatch(loadingActions.changeLoading({ show: true }));
    const body = isChange
      ? {
          img: imgItem,
        }
      : {};
    isUpdate
      ? dispatch(
          menuActions.updateMenu({
            _id: itemUpdate?._id,
            body: {
              ...body,
              sizes,
              name: namePizza.value,
              description: descriptionPizza.value,
              type: type.value,
            },
          })
        )
      : dispatch(
          menuActions.createMenu({
            img: imgItem,
            sizes,
            name: namePizza.value,
            description: descriptionPizza.value,
            type: type.value,
          })
        );
  };

  const handleChangeType = (e: any) => {
    setType(e.target.value === typeMenu.main ? typeMenu.main : typeMenu.drink);
  };

  return (
    <form className='modalBooking__container' onSubmit={handleSubmit}>
      <div className='modalAdminMenu__box'>
        <div className='modalAdminMenu__sizeBox'>
          <div className='text__subTitle sizeBox__title'>{type === typeMenu.main ? 'Size' : 'Giá tiền'}</div>
          <div className='sizeBox__listSize'>
            {sizes.map((size: any, idx: any) => (
              <SizeItem key={idx} index={idx} type={type} handleChangeSize={handleChangeSize} size={size} />
            ))}
            {type === typeMenu.main && (
              <div className='sizeBox__btnAdd' onClick={handleAddSize}>
                Thêm size
              </div>
            )}
          </div>
        </div>
        <div className='modalAdminMenu__info'>
          <div className='info__header'>
            <div className='info__itemName'>
              <div className='text__subTitle info__title'>Tên</div>
              <input type='text' className='sizeBox__itemInput info__input' name='namePizza' value={itemUpdate?.name} />
            </div>
            <label htmlFor='upload' className='info__avatar'>
              <input id='upload' type='file' onChange={handleUploadImg} name='imgPizza' />
              <img src={previewImgItem || iconAddPhoto} alt='' />
            </label>
          </div>
          <div className='info__description'>
            <div className='text__subTitle info__description--label'>Thành phần</div>
            <textarea
              className='sizeBox__itemInput info__description--text'
              name='descriptionPizza'
              value={itemUpdate?.description}
            ></textarea>
          </div>
          <select
            id='underline_select'
            className='block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black-400 dark:border-black-700 focus:outline-none focus:ring-0 focus:border-black-200 peer'
            name='type'
            onChange={handleChangeType}
            value={itemUpdate?.type}
          >
            <option value='MAIN'>Món chính</option>
            <option value='DRINK'>Nước uống</option>
          </select>
          <div className='info__btn'>
            <button className='info__btn--cancel' onClick={handleHideModalAddMenu}>
              Huỷ
            </button>
            <button className='info__btn--save' type='submit'>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalAdminMenu;
