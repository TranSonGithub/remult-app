import React from 'react';
import AdminMenuItem from '../../components/adminMenuItem/AdminMenuItem';
import iconAdd from '../../assets/icon/add.svg';
import './style.css';
import { useLocation } from 'react-router';
import { routerAdmin, routerMenu, routerMenuAdmin } from '../../utils/route';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  const { pathname } = useLocation();
  const activeMenu = (...routes: any) => {
    return routes.includes(pathname) ? 'menu__active ' : '';
  };
  return (
    <div className='adminMenu__container'>
      <div className='adminMenu__header'>
        <div className='text__title adminMenu__title'>Thực Đơn</div>
        <div className='adminMenu__addBtn'>
          <img src={iconAdd} alt='' />
        </div>
      </div>
      <div className='adminMenu__content'>
        <Link className='adminMenu__main' to={routerMenuAdmin.main}>
          <p className='text__subTitle'>Pizza</p>
          {activeMenu(routerAdmin.root, routerAdmin.menu, routerMenuAdmin.main) && (
            <div className='adminMenu__underLine'></div>
          )}
        </Link>
        <Link className='adminMenu__drink' to={routerMenuAdmin.drink}>
          <p className='text__subTitle'>Đồ uống</p>
          {activeMenu(routerMenuAdmin.drink) && <div className='adminMenu__underLine'></div>}
        </Link>
      </div>
      <div className='adminMenu__listItem'>
        <AdminMenuItem />
        <AdminMenuItem />
      </div>
    </div>
  );
};

export default AdminMenu;
