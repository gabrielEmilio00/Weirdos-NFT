import React from "react";
import styled from "styled-components";
import Confetti from "./Content/Confetti";

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

interface IMemberComponent {
    img: string;
    name: string;
    position: string;
}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.text};
    width: fit-content;
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
` 
const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0;
    color: ${props => props.theme.body};
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;

    backdrop-filter: blur(4px);
    

    border: 2px solid ${props => props.theme.text};
    border-radius: 20px;

    &:hover {
        img{ 
            transform: translateY(-2rem) scale(1.2);
        }
    }
`
const ImageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${props => props.theme.carouselColor};
    border: 1px solid ${props => props.theme.text};

    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        transition: all 0.3s ease;
    }
`
const Name = styled.h2`
    font-size: ${props => props.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin-top: 1rem;
`
const Position = styled.h2`
    font-size: ${props => props.theme.fontmd};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
    font-weight: 400;
`

const MemberComponent = ({img, name=" ", position=" "}: IMemberComponent)  => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>

    )
}

export default function Team() {
    return (
        <Section>
            <Confetti />
            <Title>Team</Title>
            <Container>
                <MemberComponent img={img1} name="Skyblaze" position="founder"/>
                <MemberComponent img={img2} name="Megnum" position="Co-founder"/>
                <MemberComponent img={img3} name="Banana" position="Director"/>
                <MemberComponent img={img4} name="DeathStroke" position="Manager"/>
                <MemberComponent img={img5} name="Lazy Kong" position="Social Media Manager"/>
                <MemberComponent img={img6} name="Cyber Punk" position="Blockchain Specialist"/>
                <MemberComponent img={img7} name="Black Panther" position="Artist"/>
                <MemberComponent img={img8} name="Monk" position="Web Developer"/>
                <MemberComponent img={img9} name="Monkey King" position="Graphic Designer"/>
                <MemberComponent img={img10} name="Waylos" position="Digital Marketing"/>
            </Container>
        </Section>
    )
}