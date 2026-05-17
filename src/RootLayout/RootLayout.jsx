import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Navbar />


      <div className="flex flex-col min-h-screen pt-28">

        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;