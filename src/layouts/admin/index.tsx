import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import Login from '../../pages/login';

const LayoutAdmin = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
