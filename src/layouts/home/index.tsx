import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import { selectShowBooking } from '../../features/modal/modalSlice';
import HomeHeaderPage from '../../pages/sectionHeader';
import SectionMenu from '../../pages/sectionMenu';
import './style.css';

const LayoutHome = () => {
  const { pathname } = useLocation();
  const modalBooking = useSelector(selectShowBooking);

  return (
    <>
      <div className='main__home--header'>
        <Navigation pathname={pathname} />
        <HomeHeaderPage />
      </div>
      <div className='main__home--menu main__home--container'>
        <SectionMenu />
      </div>
    </>
  );
};

export default LayoutHome;
