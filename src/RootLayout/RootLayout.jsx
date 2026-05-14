import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Outlet /> {/* This is where your page content will render */}
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;