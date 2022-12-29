import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

// Images
import nft1 from '../../Components/Assets/Nfts/bighead-9.svg';
import nft2 from '../../Components/Assets/Nfts/bighead-8.svg';
import nft3 from '../../Components/Assets/Nfts/bighead-7.svg';
import nft4 from '../../Components/Assets/Nfts/bighead-6.svg';
import nft5 from '../../Components/Assets/Nfts/bighead-5.svg';
import nft6 from '../../Components/Assets/Nfts/bighead-4.svg';
import nft7 from '../../Components/Assets/Nfts/bighead-3.svg';
import nft8 from '../../Components/Assets/Nfts/bighead-2.svg';
import nft9 from '../../Components/Assets/Nfts/bighead-1.svg';
import nft10 from '../../Components/Assets/Nfts/bighead.svg';


const Container = styled.div`
    width : 25vw;
    height : 70vh;

    @media (max-width: 70em){
        width: 60vh;
        
    }

    @media (max-width: 64em){
        width: 30vw;
        height: 50vh;
    }

    @media (max-width: 48em){
        width: 40vw;
        height: 50vh;
    }

    @media (max-width: 48em){
        width: 60vw;
        height: 45vh;
    }

    .swiper{
        width : 100%;
        height : 100%;
    }

    .swiper-slide{
        background-color : #EEEDDE;
        border-radius : 20px;

        display : flex;
        justify-content : center;
        align-items : center; 
    }
`

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={nft1} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft2} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft3} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft4} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft5} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft6} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft7} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft8} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft9} alt="NFT Images" /> </SwiperSlide>
                <SwiperSlide> <img src={nft10} alt="NFT Images" /> </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Carousel;