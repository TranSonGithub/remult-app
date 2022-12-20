import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from './pages/login';

function ProtectedRoutes() {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
