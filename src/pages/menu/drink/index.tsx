import React from 'react';
import { useOutletContext } from 'react-router';
import MenuItem from '../../../components/menuItem/MenuItem';
import { IMenuItem } from '../../../interface/menu';

const MenuDrink = () => {
  const context: any = useOutletContext();
  const menuDrink = context.menuDrink as IMenuItem[];

  return (
    <div className='menu__container'>
      <div className='menuAll__title'>Đồ uống</div>

      <div className='menuAll__item'>
        {menuDrink.map((menuItem, idx) => (
          <MenuItem key={idx} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuDrink;
