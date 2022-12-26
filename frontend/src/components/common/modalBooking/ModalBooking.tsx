import { useDispatch, useSelector } from 'react-redux';
import iconCloseWhite from '../../../assets/icon/closeWhite.svg';
import Pizza from '../../../assets/image/pizza.png';
import Number from '../number/Number';
import { modalActions, selectModalBooking } from '../../../features/modal/modalSlice';

import './style.css';
import { typeMenu, typeModal, typeOption } from '../../../utils/constants';
import { useState } from 'react';
import { cartActions } from '../../../features/cart/cartSlice';
import { history } from '../../../utils/history';
import { routerUser } from '../../../utils/route';
import { Link } from 'react-router-dom';

const ModalBooking = () => {
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState();
  const [totalOption, setTotalOption] = useState();
  const [size, setSize] = useState({});
  const [option, setOption] = useState({});
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
    const value = JSON.parse(e.target.value);
    setSize(value);
    setTotalSize(parseInt(value.price) as any);
  };
  const calculateTotalOption = (e: any) => {
    const value = e.target.value;
    const index = Object.keys(typeOption)?.indexOf(value);
    const nameOption = Object.values(typeOption)[index];

    setOption({ name: nameOption, price: value });
    setTotalOption(parseInt(value) as any);
  };

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
  const handleAddCart = (e: any) => {
    const total =
      item.type === typeMenu.main
        ? ((totalSize || 0) + (totalOption || 0)) * number
        : parseInt(item.sizes[0].price) * number;
    if (total !== 0) {
      dispatch(
        cartActions.addCart({
          item: {
            item: item._id,
            name: item.name,
            img: item.img,
            size,
            option,
            number,
            total,
          },
        })
      );
      dispatch(modalActions.showModal({ modalBooking: { show: false }, type: typeModal.modalBooking } as any));
    }
  };

  console.log('total', parseInt(item.sizes[0].price) * number);
  const total =
    item.type === typeMenu.main
      ? ((totalSize || 0) + (totalOption || 0)) * number
      : parseInt(item.sizes[0].price) * number;
  const diplayTotal = total ? `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000` : '0';
  return (
    <>
      <div className='modalBooking__container'>
        <div className='modalBooking__box'>
          <div
            className={
              item.type === typeMenu.main
                ? `modalBooking__content`
                : `modalBooking__content grid-cols-1 justify-items-center text-center`
            }
          >
            <div className='modalBooking__info'>
              <div className='content__avatar'>
                <img src={item.img || Pizza} alt='' />
              </div>
              <h2 className='content__title text__title--primary'>{item.name}</h2>
              <h3 className='content__ingredient text__title--second'>Thành phần</h3>
              <p className='content__ingredient--text'>{item.description}</p>
            </div>
            {item.type === typeMenu.main && (
              <div className='modalBooking__size'>
                <h2 className='text-xl mb-5'>Size</h2>
                {newSizes.map((e, idx) => (
                  <div className='flex items-center mb-4'>
                    <input
                      className='size__radio text-red-600'
                      type='radio'
                      name='size-radio'
                      onClick={calculateTotalSize}
                      value={JSON.stringify(e)}
                    />
                    <label className='size__content'>{`${e.name}/${e.size} cm: ${e.price}`}</label>
                  </div>
                ))}
              </div>
            )}
            {item.type === typeMenu.main && (
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
                    value='20.000'
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
            )}
            <div className='modalBooking__close' onClick={handleCloseModal}>
              <img src={iconCloseWhite} alt='' />
            </div>
          </div>
          <div className='modalBooking__footer'>
            <Number number={number} decreaseNumber={decreaseNumber} increaseNumber={increaseNumber} />
            {total !== 0 ? (
              <Link className='footer__total' onClick={handleAddCart} to={routerUser.cart}>
                <p>{`Thêm vào giỏ hàng ${diplayTotal} VND`}</p>
              </Link>
            ) : (
              <div className='footer__total' onClick={handleAddCart}>
                <p>{`Thêm vào giỏ hàng ${diplayTotal} VND`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBooking;
