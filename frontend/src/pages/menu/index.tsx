import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { menuActions, selectMenuList } from '../../features/menu/menuSlice';
import { mockMenuDrink, mockMenuMain } from '../../mock/menu';
import { routerMenu, routerUser } from '../../utils/route';
import './style.css';
import { loadingActions } from '../../features/loading/loading';

const MenuPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const menu = useSelector(selectMenuList);

  useEffect(() => {
    dispatch(loadingActions.changeLoading({ show: true }));
    dispatch(menuActions.getMenus({}));
  }, []);

  return (
    <div className='menuPage__container'>
      <div className='menuPage__title'>
        <p className='menuPage__title--text'>THỰC ĐƠN</p>
        <div className='menuPage__title--underline'></div>
      </div>
      <div className='menuPage__subTitle'>
        <Link className='menuPage__subTitle--item' to={routerUser.menu}>
          <p className='menuPage__subTitle--text'>Tất cả</p>
          {pathname === routerMenu.all && <div className='menuPage__subTitle--underline absolute'></div>}
        </Link>

        <Link className='menuPage__subTitle--item' to={routerMenu.main}>
          <p className='menuPage__subTitle--text'>Món chính</p>
          {pathname === routerMenu.main && <div className='menuPage__subTitle--underline absolute'></div>}
        </Link>

        <Link className='menuPage__subTitle--item' to={routerMenu.drink}>
          <p className='menuPage__subTitle--text'>Đồ uống</p>
          {pathname === routerMenu.drink && <div className='menuPage__subTitle--underline absolute'></div>}
        </Link>
      </div>
      <div className='menuPage__content'>
        <Outlet context={{ menuDrink: menu.menuDrink, menuMain: menu.menuMain }} />
      </div>
    </div>
  );
};

export default MenuPage;
