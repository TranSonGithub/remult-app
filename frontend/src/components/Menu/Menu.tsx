import React from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../../assets/icon/adminMenu.svg';
import OrderAdmin from '../../assets/icon/adminOrder.svg';
import AdminProfile from '../../assets/icon/adminProfile.svg';
import AdminOut from '../../assets/icon/adminOut.svg';
import './style.css';

import logo from '../../assets/image/logo.png';
import { routerAdmin, routerMenuAdmin } from '../../utils/route';
import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../features/auth/authSlice';
import { history } from '../../utils/history';

const Menu = (props: any) => {
  const dispatch = useDispatch();

  const { pathname } = props;
  const activeMenu = (...routes: any) => {
    return routes.includes(pathname) ? 'menu__active ' : '';
  };

  const handleLogout = (e: any) => {
    localStorage.clear();
    dispatch(authActions.clearState({}));
    history.go(0);
  };

  return (
    <div className='sidebar__container'>
      <div className='sidebar__logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='menu__sidebar'>
        <Link
          to={routerAdmin.menu}
          className={
            activeMenu(routerAdmin.root, routerAdmin.menu, routerMenuAdmin.main, routerMenuAdmin.drink) +
            `sidebar__item`
          }
        >
          <div className='sidebar__item--icon'>
            <img src={AdminMenu} alt='' />
          </div>
          <p className='sidebar__item--title'>Thực đơn</p>
        </Link>
        <Link to={routerAdmin.order} className={activeMenu(routerAdmin.order) + `sidebar__item`}>
          <div className='sidebar__item--icon'>
            <img src={OrderAdmin} alt='' />
          </div>
          <p className='sidebar__item--title'>Đơn hàng</p>
        </Link>
        <Link to={routerAdmin.profile} className={activeMenu(routerAdmin.profile) + `sidebar__item`}>
          <div className='sidebar__item--icon'>
            <img src={AdminProfile} alt='' />
          </div>
          <p className='sidebar__item--title'>Thông tin</p>
        </Link>
      </ul>
      <div className='menu__logout'>
        <div className='logout__content'>
          <div className='logout__name'>Trần Sơn</div>
          <div className='logout__title'>Admin</div>
        </div>
        <div className='logout__icon' onClick={handleLogout}>
          <img src={AdminOut} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Menu;
