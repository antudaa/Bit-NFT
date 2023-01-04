import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: white;
    background-color: #6100d4;
    cursor: pointer;
`

const Badge = ({ content }) => {
    return (
        <Div>
            {content}
        </Div>
    );
};

export default Badge;