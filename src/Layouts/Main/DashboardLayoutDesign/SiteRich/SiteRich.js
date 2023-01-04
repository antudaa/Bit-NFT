import React from 'react';
import styled from 'styled-components';


const SiteRichCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: #6100d4;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.4s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`;

const CardContent = styled.div`
    margin: 1rem;
`;

const Chart = styled.div`
    display: flex;
    justify-content: center;
    fa-solid{
        height: 4rem;
        width: 4rem;
    }
`;

const SiteRichText = styled.h3`
    text-align: center;
    font-weight: normal;
    padding: 0.4rem 0;
`;

const Rich = styled.h2`
    text-align: center;
`;

const RichIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
`;

const SiteRich = () => {
    return (
        <SiteRichCard>
            <CardContent>
                <Chart>
                    <i className="fa-solid fa-chart-simple"></i>
                </Chart>
                <SiteRichText>
                    Last Weak Rich
                </SiteRichText>
                <Rich>
                    5.8k
                </Rich>
                <RichIncrease>12% since last weak</RichIncrease>
            </CardContent>
        </SiteRichCard>
    );
};

export default SiteRich;