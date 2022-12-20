import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import ModalAdminMenu from '../../components/common/modalAdminMenu/ModalAdminMenu';

import './style.css';
import { useSelector } from 'react-redux';
import { selectModalAddMenu } from '../../features/modal/modalSlice';

const LayoutAdmin = () => {
  const { pathname } = useLocation();
  const modalAddNew = useSelector(selectModalAddMenu);

  return (
    <>
      <div className='layoutAdmin__container'>
        <div className='layoutAdmin__menu'>
          <Menu pathname={pathname} />
        </div>
        <div className='layoutAdmin__content'>
          <Outlet />
        </div>
      </div>
      {modalAddNew.show && <ModalAdminMenu />}
    </>
  );
};

export default LayoutAdmin;
