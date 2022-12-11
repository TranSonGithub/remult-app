import { Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layouts/admin';
import LayoutHome from './layouts/home';
import LayoutUser from './layouts/user';
import AboutPage from './pages/about';
import CartPage from './pages/cart';
import ContactsPage from './pages/contacts';
import LoginPage from './pages/login';
import MenuPage from './pages/menu';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  const routerAdmin = [{ path: 'login', element: <LoginPage /> }];
  const routerUser = [
    { path: 'menu', element: <MenuPage /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'contacts', element: <ContactsPage /> },
    { path: 'cart', element: <CartPage /> },
  ];

  return (
    <Routes>
      <Route path='/' element={<LayoutHome />} />

      <Route path='/user' element={<LayoutUser />}>
        {routerUser.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path='/admin' element={<LayoutAdmin />}>
          {routerAdmin.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
