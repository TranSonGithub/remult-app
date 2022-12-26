import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import shoppingCart from '../../assets/image/shopping-cart.png';
import cartReducer, { cartActions, selectCartNumber } from '../../features/cart/cartSlice';
import { routerUser } from '../../utils/route';
import './style.css';

const Navigation = (props: any) => {
  const { pathname } = props;

  const conditionActive = (path: string) => {
    const paths = pathname.split('/');
    return path === `/${paths.slice(1, 3).join('/')}` ? 'active' : '';
  };

  const cartNumber = useSelector(selectCartNumber);

  return (
    <div className={pathname === '/' ? 'container__nav--home ' : 'container__nav'}>
      <div className='nav py-6 flex flew-row items-center justify-between'>
        <Link className='nav__logo' to='/'>
          <img src={logo} alt='pizza-gusto' />
        </Link>
        <div className='nav__menu flex items-center'>
          <Link className='text__primary' to={routerUser.menu}>
            <span className={conditionActive(routerUser.menu)}>Thực đơn</span>
          </Link>
          <Link className='text__primary' to={routerUser.tracking}>
            <span className={conditionActive(routerUser.tracking)}>Theo dõi đơn hàng</span>
          </Link>
          <Link className='text__primary' to={routerUser.about}>
            <span className={conditionActive(routerUser.about)}>Thông tin</span>
          </Link>

          <Link className='cart__image relative' to='/user/cart'>
            <img src={shoppingCart} alt='shopping-cart' />
            <div className='cart__number absolute'>
              <p>{cartNumber}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
