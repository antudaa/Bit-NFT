import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';


const Title = styled.h2`
    font-size : 3em;
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
`;

const Span = styled.h2`
    text-transform : uppercase;
    color : orange;
    font-size : 2em;
    font-width : bold;
`

const Subtitle = styled.h3`
    text-transform : capitalize;
    font-width : 600;
    margin-bottom : 1rem;
    width : 80%;
    align-self : flex-start;
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
            <button className='btn btn-outline '>Explore</button>
        </div>
    );
};

export default TypewriterText;