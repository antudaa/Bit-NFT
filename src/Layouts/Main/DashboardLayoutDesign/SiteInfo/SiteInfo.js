import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge/Badge';


const SiteInfoCard = styled.div`
    height: 140%;
    width: 14rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    box-shadow: ${`rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, 
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`};

    transition: 0.4s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`;

const Card = styled.div`
    background-color: rgba(183, 194, 243, 0.3);
    border-radius: 1rem;
    margin-bottom: 1rem;
`;

const CardContent = styled.div`
    padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    ${({ justify }) =>
        justify &&
        `
        justify-content: space-around;
        width: 90%;
        `
    }
`;

const Digit = styled.div`
    background-color: #6100d4;
    padding: 0.8rem 1rem;
    font-size: 1.3rem;
    border-radius: 1rem;
`;

const InfoContainer = styled.div`
    margin-left: 0.7rem;
`;

const Title = styled.h3`
    color: black;
`;

const SubTitle = styled.h5`
    color: #333333;
    font-weight: normal;
`;




const SiteInfo = () => {
    return (
        <SiteInfoCard>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>78</Digit>
                        <InfoContainer>
                            <Title>Rank</Title>
                            <SubTitle>In Top 40%</SubTitle>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>56</Digit>
                        <InfoContainer>
                            <Title>Blogs</Title>
                            <SubTitle>This Month</SubTitle>
                        </InfoContainer>
                    </Row>
                    <Row justify>
                        <Badge content="NFT's" glow />
                        <Badge content="branding" glow />
                    </Row>
                </CardContent>
            </Card>
        </SiteInfoCard>
    );
};

export default SiteInfo;