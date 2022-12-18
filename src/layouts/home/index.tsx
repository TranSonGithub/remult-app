import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import { selectShowBooking } from '../../features/modal/modalSlice';
import HomeHeaderPage from '../../pages/sectionHeader';
import SectionMenu from '../../pages/sectionMenu';
import './style.css';
import ModalBooking from '../../components/common/modalBooking/ModalBooking';
import Footer from '../../components/footer/Footer';
import SectionInfo from '../../pages/sectionInfo';
import Popup from '../../components/common/popup/Popup';
import { selectShowPopup } from '../../features/popup/popupSlice';

const LayoutHome = () => {
  const { pathname } = useLocation();
  const modalBooking = useSelector(selectShowBooking);
  const showPopup = useSelector(selectShowPopup);

  return (
    <>
      <div className='main__home--header'>
        <Navigation pathname={pathname} />
        <HomeHeaderPage />
      </div>
      <div className='main__home--menu main__home--container'>
        <SectionMenu />
      </div>
      <div className='main__home--info main__home--container'>
        <SectionInfo />
      </div>
      <Footer />
      {modalBooking.show && <ModalBooking />}
      {showPopup && <Popup />}
    </>
  );
};

export default LayoutHome;
