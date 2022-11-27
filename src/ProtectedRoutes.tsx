import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './pages/login';

function ProtectedRoutes() {
  const token = 'asdfs';

  return token ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
