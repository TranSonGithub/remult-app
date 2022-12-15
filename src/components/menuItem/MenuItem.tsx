import './style.css';
import imagePizza from '../../assets/image/pizza.png';
import { IMenuItem } from '../../interface/menu';

const MenuItem = (menuItem: IMenuItem) => {
  const priceMin = menuItem.size.reduce((result, item) => (item.price < result.price ? item : result));
  const priceMax = menuItem.size.reduce((result, item) => (item.price > result.price ? item : result));

  return (
    <div className='menuItem__container'>
      <div className='menuItem__avatar'>
        <img src={menuItem.avatar || imagePizza} alt='' />
      </div>
      <div className='menuItem__title'>
        <p>{menuItem.name.toUpperCase()}</p>
      </div>
      <div className='menuItem__price'>
        <p>
          {priceMin.price} - {priceMax.price}
        </p>
      </div>
      <div className='menuItem__buttonBook'>
        <p>Đặt mua</p>
      </div>
    </div>
  );
};

export default MenuItem;
