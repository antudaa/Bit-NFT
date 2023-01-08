import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: white;
    background-color: #6100d4;
    cursor: pointer;

    ${({ glow }) => glow && `
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        font-weight: normal;
        color: #2f233d;
        background-color: rgba(109, 134, 245, 0.192);
    `};


    ${({ Accept }) => Accept && `
        background-color: #70e00041;
        color: #70e000;
        `
    };

    ${({ Decline }) => Decline && `
        background-color: #ff595e41;
        color: #ff595e;
        `
    };
`

const Badge = ({ content, glow = false, Accept = false, Decline = false }) => {
    return (
        <Div glow={glow} Accept={Accept} Decline={Decline}>
            {content}
        </Div>
    );
};

export default Badge;