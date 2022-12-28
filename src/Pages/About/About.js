import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


const Section = styled.section`
    min-height : 100vh;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    position : relative; 
`

const Container = styled.div`
    width : 80%;
    min-height : 80vh;
    margin : 0 auto;

    display : flex;
    justify-content : center;
    align-items : center;
`

const Box = styled.div`
    width : 50%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center ;
    align-items : center;
`

const Title = styled.h2`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 0 auto;
`;

const SubText = styled.p`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 1rem auto;
    font-width : 400;
`;


const SubTextLight = styled.p`
    text-transform : capitalize;
    width : 80%;
    align-self : flex-start;
    margin : 1rem auto;
    font-width : 400;
`;

const Button = styled.button`
    Letter-spacing : 4px
`


const About = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Bounce left>
                        <Title className='font-bold text-4xl'>
                            Welcome To The Weirdos Club.
                        </Title>
                    </Bounce>
                    <Fade left>
                        <SubText className='font-bold text-sm'>
                            The WEIRDOS CLUB is a private collection of NFTs-unique digital collectibles .The weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                        </SubText>

                        <SubTextLight className='text-sm'>
                            With more then 150+ hand drawn traits, each NFT is unique and comes to a membership to an exclusive group of successful investors .Join an ambitious ever-growing community with multiple benefits and utilities.
                        </SubTextLight>
                    </Fade>
                    <Button className='btn btn-outline' Link='#'>Apply For Membership</Button>
                    {/* <SendButton text={"Apply For Membership"}></SendButton> */}

                </Box>
            </Container>
        </Section>
    );
};

export default About;