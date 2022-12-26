import { Link, useOutletContext } from 'react-router-dom';
import MenuItem from '../../../components/menuItem/MenuItem';
import { IMenuItem } from '../../../interface/menu';

const MenuMain = () => {
  const context: any = useOutletContext();
  const menuMain = context.menuMain as IMenuItem[];

  return (
    <div className='menu__container'>
      <div className='menuAll__title'>Món chính</div>

      <div className='menuAll__item'>
        {menuMain.map((menuItem, idx) => (
          <MenuItem key={idx} menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuMain;
