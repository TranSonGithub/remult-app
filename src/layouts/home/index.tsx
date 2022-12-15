import Navigation from '../../components/navigation/Navigation';
import HomeHeaderPage from '../../pages/sectionHeader';
import SectionMenu from '../../pages/sectionMenu';
import { useLocation } from 'react-router-dom';
import './style.css';

const LayoutHome = () => {
  const { pathname } = useLocation();

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
