import { Link } from 'react-router-dom';
import MenuItem from '../../components/menuItem/MenuItem';
import { mockMenuMain } from '../../mock/menu';
import { routerUser } from '../../utils/route';
import './style.css';

const SectionMenu = () => {
  return (
    <div className='menu__container'>
      <div className='menu__title'>
        <p className='menu__title--text'>THỰC ĐƠN</p>
        <div className='menu__title--underline'></div>
      </div>
      <div className='menu__item'>
        {mockMenuMain.map((menuItem, idx) => (
          <MenuItem key={idx} {...menuItem} />
        ))}
      </div>
      <Link className='menu__button' to={routerUser.menu}>
        <p>Xem Thêm</p>
      </Link>
    </div>
  );
};

export default SectionMenu;
