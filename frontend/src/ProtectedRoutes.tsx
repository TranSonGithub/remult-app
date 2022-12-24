import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authActions, selectAuthToken } from './features/auth/authSlice';
import Login from './pages/login';

function ProtectedRoutes() {
  const token = useSelector(selectAuthToken);

  return token ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
