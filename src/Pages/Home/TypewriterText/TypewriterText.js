import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { dark } from '../../../Components/Thems/Thems';


const Title = styled.h2`
    font-size : 2.5em;
    text-transform : capitalize;
    width : 100%;
    align-self : flex-start;

    @media (max-width: 70em){
        font-size: ${dark.fontxl};
    }

    @media (max-width: 48em){
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em){
        width : 90%;
    }
`;

const Span = styled.h2`
    text-transform : uppercase;
    color : orange;
    font-size : 2em;
    font-width : bold;


    @media (max-width: 70em){
        font-size: ${dark.fontxl};
    }

    @media (max-width: 48em){
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em){
        width : 100%;
    }
`



const Subtitle = styled.h3`
    text-transform : capitalize;
    font-width : 600;
    margin-bottom : 1rem;
    width : 100%;
    align-self : flex-start;

    @media (max-width: 70em){
        font-size: ${dark.fontmd};
    }

    @media (max-width: 48em){
        align-self: center;
        text-align: center;
    }
`



const TypewriterText = () => {
    return (
        <div>
            <Title>
                Enter The World Of Digital Art Works

            </Title>
            <Span>
                <Typewriter
                    options={{
                        strings: ['Collect Super Rare', 'Digital Art Works'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Span>
            <Subtitle className='text-xl'>
                Bored Of Apes? Try Something New.
            </Subtitle>
            <div className='flex justify-center lg:justify-start'> 
            <button className='btn btn-outline '>Explore</button>
            </div>
        </div>
    );
};

export default TypewriterText;