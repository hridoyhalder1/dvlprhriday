import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Project></Project>
        </div>
    );
};

export default Home;