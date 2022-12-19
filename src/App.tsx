import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import LayoutAdmin from './layouts/admin';
import LayoutHome from './layouts/home';
import LayoutUser from './layouts/user';
import AboutPage from './pages/about';
import CartPage from './pages/cart';
import ChargePage from './pages/charge';
import LoginPage from './pages/login';
import MenuPage from './pages/menu';
import MenuDrink from './pages/menu/drink';
import MenuMain from './pages/menu/main';
import MenuAll from './pages/menu/menuAll';
import TrackingPage from './pages/tracking';
import AdminMenu from './pages/adminMenu';
import AdminOrder from './pages/adminOrder';
import AdminProfile from './pages/adminProfile';

const App = () => {
  const routerAdmin = [
    { path: 'login', element: <LoginPage /> },
    { path: '', element: <AdminMenu /> },
    {
      path: 'menu',
      element: <AdminMenu />,
      child: [
        { path: '/admin/menu/main', element: <MenuPage /> },
        { path: '/admin/menu/drink', element: <MenuPage /> },
      ],
    },
    { path: 'order', element: <AdminOrder /> },
    { path: 'profile', element: <AdminProfile /> },
  ];
  const routerUser = [
    {
      path: 'menu',
      element: <MenuPage />,
      child: [
        { path: '/user/menu', element: <MenuAll /> },
        { path: '/user/menu/main', element: <MenuMain /> },
        { path: '/user/menu/drink', element: <MenuDrink /> },
      ],
    },
    { path: 'tracking', element: <TrackingPage /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'cart', element: <CartPage /> },
    { path: 'charge', element: <ChargePage /> },
  ];

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutHome />} />

        <Route path='/user' element={<LayoutUser />}>
          {routerUser.map((route, index) =>
            route.child ? (
              <Route key={index} path={route.path} element={route.element}>
                {route.child.map((childRoute, index) => (
                  <Route key={index} path={childRoute.path} element={childRoute.element} />
                ))}
              </Route>
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<LayoutAdmin />}>
            {routerAdmin.map((route, index) =>
              route.child ? (
                <Route key={index} path={route.path} element={route.element}>
                  {route.child.map((childRoute, index) => (
                    <Route key={index} path={childRoute.path} element={childRoute.element} />
                  ))}
                </Route>
              ) : (
                <Route key={index} path={route.path} element={route.element} />
              )
            )}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
