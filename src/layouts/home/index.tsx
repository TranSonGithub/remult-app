import Navigation from '../../components/navigation/Navigation';
import HomeHeaderPage from '../../pages/homeHeader';
import { useLocation } from 'react-router-dom';
import './style.css';

const LayoutHome = () => {
  const { pathname } = useLocation();

  return (
    <div className='main__home--header'>
      <Navigation pathname={pathname} />
      <HomeHeaderPage />
    </div>
  );
};

export default LayoutHome;
