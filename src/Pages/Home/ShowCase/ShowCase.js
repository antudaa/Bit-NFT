import React, { useRef } from 'react';
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
import ETH from '../../../Components/Assets/Ethereum.svg';


const Section = styled.section`
    min-height : 100vh;
    width : 100%;
    background-color : #202020;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    position : relative;

    &>*:first-child : {
        animation : duration : 20s;
    }
    &>*:last-child : {
        animation : duration : 20s;
    }
`

const move = keyframes`
    0%{transform : translateX(100%)};
    100%{transform : translateX(-100%)};
`

const Row = styled.div`
    // background-color : #F5F5F5;
    white-space : nowrap;
    box-sizing : content-box;
    margin : 2rem 0;
    display : flex;

    animation : ${move} 20s linear infinite ${props => props.direction};

    // div{
    //     width : 5rem;
    //     height : 5rem;
    //     margin : 2rem;
    //     background-color : #726E6D;
    // }
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

const Details = styled.div`
    display : flex;
    justify-content : space-between;
    padding : 0.8rem 1rem;
    background-color : #202020;
    border : 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

    border-bottom-left-radius : 20px;
    border-bottom-right-radius : 20px;

    span{
        font-size : ${props => props.theme.fontsm};
        color : ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
        font-width : 600;
        line-height : 1.5rem;

    }

    h1{
        font-size : ${props => props.theme.fontmd};
        color : #fff;
        font-width : 600;

    }
`

const Price = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;

    img{
        width : 1rem;
        height : auto;

    }
`


const NFTItems = ({ img, number = 0, price = '$29', passRef }) => {

    let play = (event) => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (event) => {
        passRef.current.style.animationPlayState = 'paused';
    }

    return (
        <ImageContainer onMouseOver={event => pause(event)} onMouseOut={event => play(event)}>
            <img src={img} alt="" />
            <Details>
                <div>
                    <span>
                        Weirdos
                    </span>
                    <br />
                    <h1>#{number}</h1>
                </div>
                <div>
                    <span>
                        Price
                    </span>
                    <Price>
                        <img src={ETH} alt="" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImageContainer>
    )
}

const ShowCase = () => {

    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    return (
        <Section>
            <Row direction="none" ref={row1Ref}>
                <NFTItems img={img1} number={100} price={3} passRef={row1Ref} />
                <NFTItems img={img2} number={150} price={3.7} passRef={row1Ref} />
                <NFTItems img={img3} number={180} price={2.4} passRef={row1Ref} />
                <NFTItems img={img4} number={200} price={3.9} passRef={row1Ref} />
                <NFTItems img={img5} number={250} price={2} passRef={row1Ref} />

            </Row>

            <Row direction="reverse" ref={row2Ref}>
                <NFTItems img={img6} number={300} price={2.2} passRef={row2Ref} />
                <NFTItems img={img7} number={350} price={1.7} passRef={row2Ref} />
                <NFTItems img={img8} number={360} price={1} passRef={row2Ref} />
                <NFTItems img={img9} number={390} price={5.6} passRef={row2Ref} />
                <NFTItems img={img10} number={400} price={5} passRef={row2Ref} />
            </Row>
        </Section>
    );
};

export default ShowCase;