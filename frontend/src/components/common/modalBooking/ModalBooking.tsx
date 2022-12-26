import { useDispatch, useSelector } from 'react-redux';
import iconCloseWhite from '../../../assets/icon/closeWhite.svg';
import Pizza from '../../../assets/image/pizza.png';
import Number from '../number/Number';
import { modalActions, selectModalBooking } from '../../../features/modal/modalSlice';

import './style.css';
import { typeModal } from '../../../utils/constants';
import { useState } from 'react';

const ModalBooking = () => {
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState();
  const [totalOption, setTotalOption] = useState();
  const [number, setNumber] = useState(1);

  const contentModalBooking = useSelector(selectModalBooking);
  const item = contentModalBooking.item;
  const newSizes = [...item.sizes].sort((a: any, b: any) => a.price - b.price);
  console.log('newSizes', newSizes);

  // Handle modal
  const handleCloseModal = () => {
    dispatch(modalActions.hideModal({ modalBooking: { show: false }, type: typeModal.modalBooking } as any));
  };

  // Handle total
  const calculateTotalSize = (e: any) => {
    const value = e.target.value;
    setTotalSize(parseInt(value) as any);
  };
  const calculateTotalOption = (e: any) => {
    const value = e.target.value;
    setTotalOption(parseInt(value) as any);
  };
  const total = (totalSize || 0) + (totalOption || 0);
  const diplayTotal = total ? `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000` : '0';

  // Handle number
  const increaseNumber = (e: any) => {
    setNumber(number + 1);
  };
  const decreaseNumber = (e: any) => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  // Add item to cart
  const handleAddCart = (e: any) => {};

  return (
    <>
      <div className='modalBooking__container'>
        <div className='modalBooking__box'>
          <div className='modalBooking__content'>
            <div className='modalBooking__info'>
              <div className='content__avatar'>
                <img src={Pizza} alt='' />
              </div>
              <h2 className='content__title text__title--primary'>{item.name}</h2>
              <h3 className='content__ingredient text__title--second'>Thành phần</h3>
              <p className='content__ingredient--text'>{item.description}</p>
            </div>
            <div className='modalBooking__size'>
              <h2 className='text-xl mb-5'>Size</h2>
              {newSizes.map((e, idx) => (
                <div className='flex items-center mb-4'>
                  <input
                    className='size__radio text-red-600'
                    type='radio'
                    name='size-radio'
                    onClick={calculateTotalSize}
                    value={e.price}
                  />
                  <label className='size__content'>{`${e.name}/${e.size} cm: ${e.price}`}</label>
                </div>
              ))}
            </div>
            <div className='modalBooking__option'>
              <h2 className='text-xl mb-5'>Options</h2>
              <div className='flex items-center mb-4'>
                <input
                  className='size__radio'
                  type='radio'
                  name='option-radio'
                  value='10.000'
                  onClick={calculateTotalOption}
                />
                <label className='size__content'>Thêm phô mai: 10.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input
                  className='size__radio'
                  type='radio'
                  name='option-radio'
                  value='20.100'
                  onClick={calculateTotalOption}
                />
                <label className='size__content'>Gấp đôi phô mai: 20.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input
                  className='size__radio'
                  type='radio'
                  name='option-radio'
                  value='30.000'
                  onClick={calculateTotalOption}
                />
                <label className='size__content'>Gấp ba phô mai: 30.000</label>
              </div>
            </div>
            <div className='modalBooking__close' onClick={handleCloseModal}>
              <img src={iconCloseWhite} alt='' />
            </div>
          </div>
          <div className='modalBooking__footer'>
            <Number number={number} decreaseNumber={decreaseNumber} increaseNumber={increaseNumber} />
            <div className='footer__total'>
              <p>{`Thêm vào giỏ hàng ${diplayTotal} VND`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
