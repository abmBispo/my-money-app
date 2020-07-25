import '../common/templates/dependencies'
import React from 'react';
import Header from '../common/templates/Header';
import Sidebar from '../common/templates/Sidebar';
import Footer from '../common/templates/Footer';
import Routes from './Routes';

export default (props) => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
);