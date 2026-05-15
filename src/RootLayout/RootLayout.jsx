import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
