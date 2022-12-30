import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  popupActions,
  selectActionPopup,
  selectContentPopup,
  selectNumberButtonPopup,
  selectTypePopup,
} from '../../../features/popup/popupSlice';
import { routerUser } from '../../../utils/route';
import './style.css';
import { cartActions } from '../../../features/cart/cartSlice';

const Popup = () => {
  const dispatch = useDispatch();
  const numberButton = useSelector(selectNumberButtonPopup);
  const action = useSelector(selectActionPopup);
  const type = useSelector(selectTypePopup);

  const content = useSelector(selectContentPopup);

  const navigate = useNavigate();
  const handleClickPayment = (e: any) => {
    dispatch(
      popupActions.hidePopup({
        show: false,
        content: '',
        numberButton: 0,
        type: 'PAYMENT',
      })
    );
    dispatch(cartActions.resetCart());
    navigate(routerUser.tracking);
  };
  console.log(`[Popup] type -> ${type}`);

  const handleClickCancel = (e: any) => {
    dispatch(
      popupActions.hidePopup({
        show: false,
        content: '',
        numberButton: 0,
        type: 'POPUP',
      })
    );
  };

  return (
    <>
      <div className='popup__container'>
        <div className='popup__box'>
          <div className='popup__text'>{content}</div>
          <div className='popup__button'>
            {numberButton === 2 && (
              <div className='popup__button--item popup__cancel' onClick={handleClickCancel}>
                Huỷ
              </div>
            )}
            <div
              className='popup__button--item popup__success'
              onClick={type == 'PAYMENT' ? handleClickPayment : action}
            >
              Xác nhận
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
