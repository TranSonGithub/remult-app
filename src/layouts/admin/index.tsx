import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import Login from '../../pages/login';

const LayoutAdmin = () => {
  return (
    <div>
      <div>Layout Admin</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
