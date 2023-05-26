import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Prime = () => {
    return (
        <div className='max-w-7xl'>
            <Header></Header>
            <div className='min-h-[calc(100vh-340px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Prime;