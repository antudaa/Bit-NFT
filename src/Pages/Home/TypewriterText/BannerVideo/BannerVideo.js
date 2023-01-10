import React from 'react';
import styled from 'styled-components';
import video from '../../../../Components/Assets/Videos/NFT Animation Logo.mp4';


const VideoContainer = styled.div`
     width : 100%;
     
     video{
        width : 100%;
        height : auto;
        border-radius: 30px;
     }

    @media (max-width: 64em){
        min-width: 45vh
    }
    `


const BannerVideo = () => {

    return (
        <VideoContainer>
            <video src={video} type="video/mp4" autoPlay muted loop ></video>
        </VideoContainer>
    );
};

export default BannerVideo;