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

const Title = styled.h2`
    font-size : 3em;Name
    text-transform : capitalize;
    width : 100%;
`;


const TeamSection = () => {
    return (
        <div>
            <Title className='text-center py-6' >
                <span data-aos="fade-down">Our Team</span>
            </Title>

            <div className="flex items-center justify-center">

                <div className="relative w-3/4 lg:w-2/4 h-80 bg-gray-800 p-16 rounded text-white overflow-hidden">

                    <div className="absolute bottom-0 left-0 right-0 space-y-1">
                        <div className="scroller flex space-x-1 whitespace-nowrap text-xs text-gray-300">
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px] mx-auto h-[250px] mt-6" src={antu} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>ANTU</span>
                                        <span className='text-white text-xl title-position'>CEO</span>
                                    </div>
                                </div>
                            </a>
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px] mx-auto h-[250px] mt-6" src={nirjhor} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>NIRJHOR</span>
                                        <span className='text-white text-xl title-position'>CTO</span>
                                    </div>
                                </div>
                            </a>
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px]  mx-auto h-[250px] mt-6" src={satirtha} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>SATIRTHA</span>
                                        <span className='text-white text-xl title-position'>CMO</span>
                                    </div>
                                </div>
                            </a>
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px]  mx-auto h-[250px] mt-6" src={misti} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>MISTI</span>
                                        <span className='text-white text-xl title-position'>Director</span>
                                    </div>
                                </div>
                            </a>
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px]  mx-auto h-[250px] mt-6" src={ayon} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>AYON</span>
                                        <span className='text-white text-xl title-position'>Chief Advisor</span>
                                    </div>
                                </div>
                            </a>
                            <a href="##" className="bg-gray-600 rounded">
                                <div className="carousel-item w-[300px] h-[370px] flex flex-col justify-center align-center">
                                    <img className="w-[250px] mx-auto h-[250px] mt-6" src={nayon} alt="pic" />
                                    <div className='title flex flex-col mt-2 text-center'>
                                        <span className='text-white text-xl title-name'>NAYON</span>
                                        <span className='text-white text-xl title-position'>Managing Director</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;