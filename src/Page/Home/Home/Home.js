import React from 'react';
import Navbar from '../../Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Project></Project>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;