import React from 'react';
import About from '../../About/About';
import Home from '../Home';
import ShowCase from '../ShowCase/ShowCase';
import TeamSection from '../TeamSection/TeamSection';

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            {/* <ShowCase /> */}
            <TeamSection />
        </div>
    );
};

export default HomePage;