import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './ProtectedRoutes';
import LayoutAdmin from './layouts/admin';
import LayoutUser from './layouts/user';
import { IRouter } from './interface/router';
import Login from './pages/login';

const App = () => {
  const routerLayout = [
    { path: '/', element: <LayoutUser /> },
    { path: '/admin', element: <LayoutAdmin />, protected: true },
  ];
  const routerAdmin = [{ path: 'login', element: <Login /> }];

  return (
    <Routes>
      <Route path='/' element={<LayoutUser />} />

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
