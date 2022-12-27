import React from 'react';
import styled from 'styled-components';
import video from '../../../../Components/Assets/Videos/Home Video.mp4';


const VideoContainer = styled.div`
     width : 100%;
     
     video{
        width : 100%;
        height : auto;
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