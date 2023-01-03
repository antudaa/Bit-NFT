import React from 'react';
import DynamicRouteHook from '../../../Components/DynamiRouteHook/DynamicRouteHook';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Home from '../Home';
import ShowCase from '../ShowCase/ShowCase';
import TeamSection from '../TeamSection/TeamSection';

const HomePage = () => {

    DynamicRouteHook('Home');

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