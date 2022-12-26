import React, { useEffect, useState } from 'react';
import AdminMenuItem from '../../components/adminMenuItem/AdminMenuItem';
import iconAdd from '../../assets/icon/add.svg';
import './style.css';
import { useLocation } from 'react-router';
import { routerAdmin, routerMenu, routerMenuAdmin } from '../../utils/route';
import { Link } from 'react-router-dom';
import { modalActions } from '../../features/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { typeModal } from '../../utils/constants';
import { menuActions, selectMenuList } from '../../features/menu/menuSlice';
import { loadingActions } from '../../features/loading/loading';

const AdminMenu = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const menu = useSelector(selectMenuList);

  const [subMenu, setSubMenu] = useState(menu.menuMain);

  const activeMenu = (...routes: any) => {
    return routes.includes(pathname) ? 'menu__active ' : '';
  };

  const handleSetSubTitle = () => {
    console.log(pathname);
    setSubMenu(pathname === '/admin/menu/main' || pathname === '/admin/menu' ? menu.menuDrink : menu.menuMain);
  };

  const handleShowModalAddMenu = (e: any) => {
    dispatch(modalActions.showModal({ modalAddMenu: { show: true }, type: typeModal.modalAddMenu } as any));
  };

  useEffect(() => {
    setSubMenu(pathname === '/admin/menu/main' || pathname === '/admin/menu' ? menu.menuMain : menu.menuDrink);
  }, [menu]);
  useEffect(() => {
    dispatch(loadingActions.changeLoading({ show: true }));
    dispatch(menuActions.getMenus({}));
  }, []);
  console.log(`[AdminMenu] menus -> ${JSON.stringify(menu, null, 2)}`);
  console.log(`[AdminMenu] pathname -> ${JSON.stringify(pathname, null, 2)}`);

  return (
    <div className='adminMenu__container'>
      <div className='adminMenu__header'>
        <div className='text__title adminMenu__title'>Thực Đơn</div>
        <div className='adminMenu__addBtn' onClick={handleShowModalAddMenu}>
          <img src={iconAdd} alt='' />
        </div>
      </div>
      <div className='adminMenu__content'>
        <Link className='adminMenu__main' to={routerMenuAdmin.main} onClick={handleSetSubTitle}>
          <p className='text__subTitle'>Món chính</p>
          {activeMenu(routerAdmin.root, routerAdmin.menu, routerMenuAdmin.main) && (
            <div className='adminMenu__underLine'></div>
          )}
        </Link>
        <Link className='adminMenu__drink' to={routerMenuAdmin.drink} onClick={handleSetSubTitle}>
          <p className='text__subTitle'>Đồ uống</p>
          {activeMenu(routerMenuAdmin.drink) && <div className='adminMenu__underLine'></div>}
        </Link>
      </div>
      <div className='adminMenu__listItem'>
        {subMenu.map((e, idx) => {
          return <AdminMenuItem key={idx} item={e} />;
        })}
      </div>
    </div>
  );
};

export default AdminMenu;
