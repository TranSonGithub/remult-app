import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItem from '../../components/menuItem/MenuItem';
import { menuActions, selectMenuList } from '../../features/menu/menuSlice';
import { mockMenuMain } from '../../mock/menu';
import { routerUser } from '../../utils/route';
import './style.css';

const SectionMenu = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenuList);
  const newMenus = menu.menuMain.filter((e, idx) => idx < 4);

  useEffect(() => {
    dispatch(menuActions.getMenus({}));
  }, []);

  return (
    <div className='menu__container'>
      <div className='menu__title'>
        <p className='menu__title--text'>THỰC ĐƠN</p>
        <div className='menu__title--underline'></div>
      </div>
      <div className='menu__item'>
        {newMenus.map((menuItem, idx) => (
          <MenuItem key={idx} menuItem={menuItem} />
        ))}
      </div>
      <Link className='menu__button' to={routerUser.menu}>
        <p>Xem Thêm</p>
      </Link>
    </div>
  );
};

export default SectionMenu;
