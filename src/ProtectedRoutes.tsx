import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './pages/login';

function ProtectedRoutes() {
  const token = 'abc';

  return token ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
