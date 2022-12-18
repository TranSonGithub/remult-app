import { Outlet, useLocation } from 'react-router-dom';
import ModalBooking from '../../components/common/modalBooking/ModalBooking';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectShowBooking } from '../../features/modal/modalSlice';

const LayoutUser = () => {
  const { pathname } = useLocation();

  const modalBooking = useSelector(selectShowBooking);

  return (
    <>
      <Navigation pathname={pathname} />
      <div className='main__user--content'>
        <Outlet />
      </div>
      <Footer />
      {modalBooking.show && <ModalBooking />}
    </>
  );
};

export default LayoutUser;
