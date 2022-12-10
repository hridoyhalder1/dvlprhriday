import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;