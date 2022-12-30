import React from 'react';
import styled from 'styled-components';

// Images 
import satirtha from '../../../Components/Assets/Nfts/bighead-1.svg';
import misti from '../../../Components/Assets/Nfts/bighead-3.svg';
import antu from '../../../Components/Assets/Nfts/bighead-5.svg';
import nayon from '../../../Components/Assets/Nfts/bighead-6.svg';
import ayon from '../../../Components/Assets/Nfts/bighead-7.svg';
import nirjhor from '../../../Components/Assets/Nfts/bighead-8.svg';

import './TeamSection.css';

const Section = styled.section`

`

const Title = styled.h2`
    font-size : 3em;
    background-color : #000000;
    color : #fff;
    text-transform : capitalize;
    width : 100%;
`;


const TeamSection = () => {
    return (
        <Section>
            <Title className='text-center' >
                <span data-aos="fade-down">Our Team</span>
            </Title>
            <div className='team-section'>
                <div class="carousel">
                    <div class="carousel-content">
                        <div class="carousel-item">
                            <img src={antu} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>ANTU</span>
                                <span className='text-white text-2xl mr-8 title-position'>CEO</span>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={nirjhor} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>NIRJHOR</span>
                                <span className='text-white text-2xl mr-8 title-position'>CTO</span>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={satirtha} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>SATIRTHA</span>
                                <span className='text-white text-2xl mr-8 title-position'>CMO</span>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={misti} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>MISTI</span>
                                <span className='text-white text-2xl mr-8 title-position'>Director</span>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={ayon} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>AYON</span>
                                <span className='text-white text-2xl mr-8 title-position'>Chief Advisor</span>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={nayon} alt="pic" />
                            <div className='title'>
                                <span className='text-white text-2xl ml-8 title-name'>NAYON</span>
                                <span className='text-white text-2xl mr-8 title-position'>Managing Director</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TeamSection;