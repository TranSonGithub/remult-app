import { Outlet, useLocation } from 'react-router-dom';
import ModalBooking from '../../components/common/modalBooking/ModalBooking';
import { selectShowPopup } from '../../features/popup/popupSlice';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectModalBooking } from '../../features/modal/modalSlice';
import Popup from '../../components/common/popup/Popup';

const LayoutUser = () => {
  const { pathname } = useLocation();

  const modalBooking = useSelector(selectModalBooking);
  const showPopup = useSelector(selectShowPopup);

  return (
    <>
      <Navigation pathname={pathname} />
      <div className='main__user--content'>
        <Outlet />
      </div>
      <Footer />
      {modalBooking.show && <ModalBooking />}
      {showPopup && <Popup />}
    </>
  );
};

export default LayoutUser;
