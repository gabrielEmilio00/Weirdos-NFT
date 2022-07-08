import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../../../assets/nfts/bighead-1.svg';
import img2 from '../../../assets/nfts/bighead-2.svg';
import img3 from '../../../assets/nfts/bighead-3.svg';
import img4 from '../../../assets/nfts/bighead-4.svg';
import img5 from '../../../assets/nfts/bighead-5.svg';
import img6 from '../../../assets/nfts/bighead-6.svg';
import img7 from '../../../assets/nfts/bighead-7.svg';
import img8 from '../../../assets/nfts/bighead-8.svg';
import img9 from '../../../assets/nfts/bighead-9.svg';
import img10 from '../../../assets/nfts/bighead-10.svg';
import Arrow from '../../../assets/imgs/Arrow.svg';

const Container = styled.div`
    width: 25vw;
    height: 70vh;

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-next {
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;


    &::after {
        display: none;
    }
}

.swiper-button-prev {
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;


    &::after {
        display: none;
    }
}
`

export default function Carousel() {
    return(
        <Container>
            <Swiper
            autoplay={{
                delay:2000,
                disableOnInteraction:false,
            }}
            pagination={{
                type: 'fraction'
            }}
            navigation={true}
            scrollbar={{
                draggable:true
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className="swiper"
            >
                <SwiperSlide> <img src={img1} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img2} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img3} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img4} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img5} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img6} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img7} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img8} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img9} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide> <img src={img10} alt="The Weirdos" /></SwiperSlide>
            </Swiper>
        </Container>
    )
}