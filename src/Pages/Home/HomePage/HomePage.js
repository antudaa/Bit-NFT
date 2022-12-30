import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Home from '../Home';
import ShowCase from '../ShowCase/ShowCase';
import TeamSection from '../TeamSection/TeamSection';

const HomePage = () => {
    return (
        <div>
            <Home />
            <About />
            <ShowCase />
            <TeamSection />
            <Contact />
        </div>
    );
};

export default HomePage;