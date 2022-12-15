import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import MenuItem from '../../../components/menuItem/MenuItem';
import { mockMenuMain } from '../../../mock/menu';
import { IMenuItem } from '../../../interface/menu';
import { routerUser } from '../../../utils/route';
import './style.css';

const MenuAll = () => {
  const context: any = useOutletContext();
  const menuDrink = context.menuDrink as IMenuItem[];
  const menuMain = context.menuMain as IMenuItem[];

  return (
    <div className='menu__container'>
      <div className='menuAll__title'>Món chính</div>

      <div className='menuAll__item'>
        {menuMain.map((menuItem, idx) => (
          <MenuItem key={idx} {...menuItem} />
        ))}
      </div>

      <div className='menuAll__title'>Đồ uống</div>
      <div className='menuAll__item'>
        {menuDrink.map((menuItem, idx) => (
          <MenuItem key={idx} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuAll;
