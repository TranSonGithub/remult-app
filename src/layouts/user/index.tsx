import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/navigation/Navigation';

const LayoutUser = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navigation pathname={pathname} />
      <div className='main__user--content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutUser;
