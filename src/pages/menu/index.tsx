import { Link, Outlet } from 'react-router-dom';
import { routerMenu, routerUser } from '../../utils/route';
import './style.css';

const MenuPage = () => {
  const routersMenu = [];

  return (
    <div className='menuPage__container'>
      <div className='menuPage__title'>
        <p className='menuPage__title--text'>THỰC ĐƠN</p>
        <div className='menuPage__title--underline'></div>
      </div>
      <div className='menuPage__subTitle'>
        <Link className='menuPage__subTitle--item' to={routerUser.menu}>
          <p className='menuPage__subTitle--text'>Tất cả</p>
          <div className='menuPage__subTitle--underline'></div>
        </Link>

        <Link className='menuPage__subTitle--item' to={routerMenu.main}>
          <p className='menuPage__subTitle--text'>Món chính</p>
          <div className='menuPage__subTitle--underline absolute'></div>
        </Link>

        <Link className='menuPage__subTitle--item' to={routerMenu.drink}>
          <p className='menuPage__subTitle--text'>Đồ uống</p>
          <div className='menuPage__subTitle--underline absolute'></div>
        </Link>
      </div>
      <div className='menuPage__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default MenuPage;
