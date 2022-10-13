import React from "react";
import styled from "styled-components";
import GIF from '../../../../assets/videos/Home Video.mp4';

const VideoContainer = styled.div`
    width: 100%;

video {
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
    min-width: 40vh;
}

`

export default function CoverVideo() {
    return(
        <VideoContainer>
            <video src={GIF} typeof="video/mp4" autoPlay loop muted />
        </VideoContainer>
    )
}