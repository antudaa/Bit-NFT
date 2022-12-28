import React from 'react';
import About from '../../About/About';
import Home from '../Home';
import ShowCase from '../ShowCase/ShowCase';

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <ShowCase />
        </div>
    );
};

export default HomePage;