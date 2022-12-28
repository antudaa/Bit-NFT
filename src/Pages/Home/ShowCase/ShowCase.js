import React from 'react';
import styled, { keyframes } from 'styled-components';

// Images
import img1 from '../../../Components/Assets/Nfts/bighead.svg';
import img2 from '../../../Components/Assets/Nfts/bighead-1.svg';
import img3 from '../../../Components/Assets/Nfts/bighead-2.svg';
import img4 from '../../../Components/Assets/Nfts/bighead-3.svg';
import img5 from '../../../Components/Assets/Nfts/bighead-4.svg';
import img6 from '../../../Components/Assets/Nfts/bighead-5.svg';
import img7 from '../../../Components/Assets/Nfts/bighead-6.svg';
import img8 from '../../../Components/Assets/Nfts/bighead-7.svg';
import img9 from '../../../Components/Assets/Nfts/bighead-8.svg';
import img10 from '../../../Components/Assets/Nfts/bighead-9.svg';


const Section = styled.section`
    min-height : 100vh;
    width : 100vw;
    // background-color : #ADD8E6;
    background-color : #202020;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    position : relative;
`

const move = keyframes`
    0%{transform : translateX(100%)};
    100%{transform : translateX(-100%)};
`

const Row = styled.div`
    background-color : #F5F5F5;
    white-space : nowrap;
    box-sizing : content-box;
    margin : 2rem 0;
    display : flex;

    animation : ${move} 12s linear infinite ${props => props.direction};

    div{
        width : 5rem;
        height : 5rem;
        margin : 2rem;
        background-color : #726E6D;
    }
`

const ImageContainer = styled.div`
    width : 15rem;
    margin : 0 1rem;
    background-color : #fff;

    border-radius : 20px;
    cursor : pointer;

    img{
        width : 100%;
        height : auto;

    }
`


const NFTItems = ({ img, number = 0, price = '$29' }) => {
    return (
        <ImageContainer>
            <img src={img} alt="" />
        </ImageContainer>
    )
}

const ShowCase = () => {
    return (
        <Section>
            <Row direction="none">
                <NFTItems img={img1} />
                <NFTItems img={img2} />
                <NFTItems img={img3} />
                <NFTItems img={img4} />
                <NFTItems img={img5} />
                <NFTItems img={img6} />
                <NFTItems img={img7} />
                <NFTItems img={img8} />
                <NFTItems img={img9} />
                <NFTItems img={img10} />
            </Row>

            <Row direction="reverse">
                <div>item1</div>
                <div>item2</div>
                <div>item3</div>
                <div>item4</div>
                <div>item5</div>
            </Row>
        </Section>
    );
};

export default ShowCase;