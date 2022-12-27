import React from 'react';
import styled from 'styled-components';
import BannerVideo from './TypewriterText/BannerVideo/BannerVideo';
import TypewriterText from './TypewriterText/TypewriterText';


const Section = styled.section`
    // min-height : ${props => `calc(100vh - ${props.theme.navHeight})`};
    min-height : 100vh;
    width : 98vw;
    position : relative;
    background-color : ${props => props.theme.text};
`


const Container = styled.div`
    width : 80%;
    min-height : 80vh;
    margin : 0 auto;

    display : flex;
    justify-content : center;
    align-items : center;
`


const Article = styled.div`
    width : 50%;
    height : 100%;
    display : flex; 
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const Home = () => {
    return (
        <Section>
            <Container>
                <Article>
                    <TypewriterText />
                </Article>
                <Article>
                    <BannerVideo />
                </Article>
            </Container>
        </Section>
    );
};

export default Home;