import './style.css';
import imagePizza from '../../assets/image/pizza.png';
import { IMenuItem } from '../../interface/menu';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../features/modal/modalSlice';
import { typeModal } from '../../utils/constants';

const MenuItem = (props: any) => {
  const { img, name, description, sizes } = props.menuItem;
  const dispatch = useDispatch();

  const priceMin = sizes.reduce((result: any, item: any) => (item.price < result.price ? item : result));
  const priceMax = sizes.reduce((result: any, item: any) => (item.price > result.price ? item : result));

  const handleBooking = (e: any) => {
    dispatch(
      modalActions.showModal({
        modalBooking: { show: true, item: { img, name, description, sizes } },
        type: typeModal.modalBooking,
      } as any)
    );
  };

  return (
    <div className='menuItem__container'>
      <div className='menuItem__avatar'>
        <img src={img || imagePizza} alt='' />
      </div>
      <div className='menuItem__title'>
        <p>{name.toUpperCase()}</p>
      </div>
      <div className='menuItem__price'>
        <p>
          {priceMin.price} - {priceMax.price}
        </p>
      </div>
      <div className='menuItem__buttonBook' onClick={handleBooking}>
        <p>Đặt mua</p>
      </div>
    </div>
  );
};

export default MenuItem;
