import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

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
import ETH from '../../../assets/imgs/Ethereum.svg'


interface INftItem {
    img: string;
    number: number;
    price: number;
    passRef: React.MutableRefObject<any>;
}

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &>*:first-child {
        animation-duration: 20s;
    }   
    &>*:last-child {
        animation-duration: 20s;
    }
`
const move = keyframes`
    0%{ transform: translateX(100%); }
    100%{ transform: translateX(-100%); }
`

const Row = styled.div` 
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;

    animation: ${move} linear infinite ${props => props.dir};

`
const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${props => props.theme.body};

    border-radius: 20px;
    cursor: pointer;

    img {
        width: 100%;
        height: auto;
    }
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => `rgba(${props.theme.bodyRgba  }, 0.5)` };

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
    span {
        font-size: ${props => props.theme.fontsm};
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: ${props => props.theme.fontmd};
        color: ${props => props.theme.body};
        font-weight: 600;
    }
`
const Price = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
        width: 1rem;
        height: auto;
    }
`

const NftItem = ({img, number=0, price=0, passRef}: INftItem) => {

    let play = (e: any) => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (e: any) => {
        passRef.current.style.animationPlayState = 'paused';
    }
    return (
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
            <img src={img} alt="The Weirdos" />
        <Details>
            <div>
                <span>Weirdos</span> <br />
                <h1>#{number}</h1>
            </div>

            <div>
                <span>Price</span>
                <Price>
                    <img src={ETH} alt="ETH" />
                    <h1>{Number(price).toFixed(1)}</h1>
                </Price>
            </div>
        </Details>
        </ImgContainer>
    )
}


export default function ShowCase() {

    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);
    return(
        <Section>
            <Row dir="none" ref={Row1Ref}>
                <NftItem img={img1} number={748} price={5.9} passRef={Row1Ref} />
                <NftItem img={img2} number={961} price={3.8} passRef={Row1Ref} />
                <NftItem img={img3} number={830} price={2.2} passRef={Row1Ref} />
                <NftItem img={img4} number={282} price={4.1} passRef={Row1Ref} />
                <NftItem img={img5} number={937} price={1.2} passRef={Row1Ref} />
            </Row>
            <Row dir="reverse" ref={Row2Ref}>
                <NftItem img={img6} number={996} price={3.1} passRef={Row2Ref}/>
                <NftItem img={img7} number={494} price={4.4} passRef={Row2Ref}/>
                <NftItem img={img8} number={780} price={5.0} passRef={Row2Ref}/>
                <NftItem img={img9} number={742} price={8.3} passRef={Row2Ref}/>
                <NftItem img={img10} number={291} price={9.0} passRef={Row2Ref}/>
            </Row>
        </Section>
    )
}