import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../features/popup/popupSlice';
import DownArrow from '../../assets/icon/downArrow.svg';
import UpArrow from '../../assets/icon/upArrow.svg';
import SubOrderItem from '../subOrderItem/SubOrderItem';
import './style.css';
import { loadingActions } from '../../features/loading/loading';
import { cartActions } from '../../features/cart/cartSlice';
import { StatusOrder } from '../../utils/constants';

const OrderItem = (props: any) => {
  const { _id, orderId, total, guestInfo, items, status } = props.orderItem;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenContent = (e: any) => {
    setIsOpen(!isOpen);
  };

  const handleCancel = (e: any) => {
    dispatch(
      popupActions.showPopup({
        show: true,
        content: 'Bạn chắc chắn muốn huỷ đơn hàng',
        numberButton: 2,
        type: 'POPUP',
        action: () => {
          dispatch(loadingActions.changeLoading({ show: true }));
          dispatch(
            cartActions.updateOrder({
              _id,
              body: {
                status: 'CANCEL',
              },
            })
          );
        },
      })
    );
  };
  const indexStatus = Object.keys(StatusOrder).findIndex((e: any) => e === status);

  return (
    <div className='orderItem__container'>
      <div className={'orderItem__header' + `${!isOpen ? ' border' : ''}`}>
        <div className='header__orderId'>{`Đơn hàng: #${orderId}`}</div>
        <div className='header__total'>{`Tổng tiền: ${total
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND`}</div>
        <div className='header__arrow'>
          <img src={isOpen ? UpArrow : DownArrow} alt='' onClick={handleOpenContent} />
        </div>
      </div>
      {isOpen && (
        <div className='orderItem__content'>
          <div className='orderItem__info'>
            <div className='orderItem__info--text info__name'>{`Người nhận: ${guestInfo.name}`}</div>
            <div className='orderItem__info--text info__phoneNumber'>{`Số điện thoại: ${guestInfo.phoneNumber}`}</div>
            <div className='orderItem__info--text info__location'>{`Địa chỉ: ${guestInfo.address}`}</div>
          </div>
          <div className='orderItem__listOrder'>
            {items.map((e: any, idx: any) => (
              <SubOrderItem {...e} key={idx} />
            ))}
          </div>
          <div className='orderItem__button'>
            {status === 'READY' ? (
              <button className='orderItem__button--red' onClick={handleCancel}>
                Huỷ Đơn Hàng
              </button>
            ) : (
              <div className={`${Object.values(StatusOrder)[indexStatus].class}`}>
                {Object.values(StatusOrder)[indexStatus].text}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
