import { useState } from 'react';
import Pizza from '../../assets/image/pizza.png';
import { typeMenu } from '../../utils/constants';
import Number from '../common/number/Number';
import './style.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';

const CartItem = (props: any) => {
  const dispatch = useDispatch();
  const { item, img, name, size, option, number, type, handleChangeCart } = props;
  console.log(props, props.name);

  const [numberItem, setNumberItem] = useState(number);

  // Handle number
  const increaseNumber = (e: any) => {
    setNumberItem(numberItem + 1);
    handleChangeCart(item, 1);
  };
  const decreaseNumber = (e: any) => {
    if (numberItem > 1) {
      setNumberItem(numberItem - 1);
      handleChangeCart(item, -1);
    }
  };

  const handleDeleteItem = (e: any) => {
    dispatch(cartActions.removeCart({ item }));
  };

  return (
    <div className='cartItem__container'>
      <div className='cartItem__avatar'>
        <img src={img || Pizza} alt='' />
      </div>
      <div className='cartItem__content'>
        <div className='text__title--primary cartItem__title'>{name}</div>
        <div className='cartItem__text'>{type === typeMenu.main ? `${size.name}/${size.size} cm` : ''}</div>
        <div className='cartItem__text'>
          {type === typeMenu.main && Object.keys(option).length !== 0 ? `${option.name}: ${option.price}` : ''}
        </div>
        <div className='cartItem__action'>
          <div className='action__delete' onClick={handleDeleteItem}>
            Xoá
          </div>
        </div>
      </div>
      <div className='cartItem__number'>
        <Number number={numberItem} increaseNumber={increaseNumber} decreaseNumber={decreaseNumber} />
      </div>
    </div>
  );
};

export default CartItem;
