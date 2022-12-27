import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

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


const Container = styled.div`
    width : 25vw;
    height : 70vh;

    .swiper{
        width : 100%;
        height : 100%;
    }
`

const Carousel = () => {
    return (
        <Container>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Carousel;