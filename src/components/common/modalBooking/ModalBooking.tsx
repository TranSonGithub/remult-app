import { useDispatch, useSelector } from 'react-redux';
import iconCloseWhite from '../../../assets/icon/closeWhite.svg';
import Pizza from '../../../assets/image/pizza.png';
import Number from '../number/Number';
import { modalActions, selectShowBooking } from '../../../features/modal/modalSlice';

import './style.css';

const ModalBooking = () => {
  const dispatch = useDispatch();

  const total = '40.000';

  const handleCloseModal = () => {
    dispatch(modalActions.hideModalBooking({ modalBooking: { show: false } }));
  };

  return (
    <>
      <div className='modalBooking__container'>
        <div className='modalBooking__box'>
          <div className='modalBooking__content'>
            <div className='modalBooking__info'>
              <div className='content__avatar'>
                <img src={Pizza} alt='' />
              </div>
              <h2 className='content__title text__title--primary'>Pizal hot</h2>
              <h3 className='content__ingredient text__title--second'>Thành phần</h3>
              <p className='content__ingredient--text'>Xúc xích Salami, hành tây, sốt cà chua, pho mai.</p>
            </div>
            <div className='modalBooking__size'>
              <h2 className='text-xl mb-5'>Size</h2>
              <div className='flex items-center mb-4'>
                <input className='size__radio text-red-600' type='radio' name='size-radio' />
                <label className='size__content'>Size S/20cm: 20.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input className='size__radio' type='radio' name='size-radio' />
                <label className='size__content'>Size M/30cm: 30.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input className='size__radio' type='radio' name='size-radio' />
                <label className='size__content'>Size L/20cm: 40.000</label>
              </div>
            </div>
            <div className='modalBooking__option'>
              <h2 className='text-xl mb-5'>Options</h2>
              <div className='flex items-center mb-4'>
                <input className='size__radio' type='radio' name='option-radio' value='10' />
                <label className='size__content'>Thêm phô mai: 10.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input className='size__radio' type='radio' name='option-radio' value='20' />
                <label className='size__content'>Gấp đôi phô mai: 20.000</label>
              </div>
              <div className='flex items-center mb-4'>
                <input className='size__radio' type='radio' name='option-radio' value='30' />
                <label className='size__content'>Gấp ba phô mai: 30.000</label>
              </div>
            </div>
            <div className='modalBooking__close' onClick={handleCloseModal}>
              <img src={iconCloseWhite} alt='' />
            </div>
          </div>
          <div className='modalBooking__footer'>
            <Number />
            <div className='footer__total'>
              <p>{`Thêm vào giỏ hàng ${total} VND`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
