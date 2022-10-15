import React from "react";
import styled from "styled-components";

import Banner from "./Content/Banner";
import Logo from "../Navigation/NavBar/Logo";

import Facebook from "../../assets/icons/Facebook";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";
import Twitter from "../../assets/icons/Twitter";

const Section = styled.section`
    min-height: 100vh;
    height: 100vh;
    width: 100vwvw;
    background-color: ${props => props.theme.body};
    position: relative;
    color: ${props => props.theme.text};

    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
`
const Container = styled.div`
    width: 75%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${props => props.theme.text};

    @media (max-width: 48em) {
        width: 90%; 

        h1 {
            font-size: ${props => props.theme.fontxxl};
        }
    }
`
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 48em) {
        width: 100%; 
    }
`
const IconList = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto;

    &>* {
        padding-right: 0.5rem;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.2);
        }
    }
`
const MenuItens = styled.ul`
    list-style: none;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 48em) {
        display: none; 
    }

`
const Item = styled.li`
    width: fit-content;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 0%;
        height: 2px;
        background-color: ${props => props.theme.text};
        transition: width 0.3s ease;
    }
    &:hover::after {
        width: 100%;
    }
`
const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: underline;
    }

    @media (max-width: 48em) {
        width: 100%;
        flex-direction: column;

        span {
            margin-bottom: 1rem;
        }
    }
`

export default function Footer() {

    const scrollTo = (id: string) => {
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer">
                            <Facebook/>
                        </a>
                        <a href="https://instagram.com" target='_blank' rel="noopener noreferrer">
                            <Instagram/>
                        </a>
                        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer">
                            <Twitter/>
                        </a>
                        <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer">
                            <LinkedIn/>
                        </a>
                    </IconList>
                </Left>
                <MenuItens>
                    <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>

                    <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
                </MenuItens>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
                </span>
                <span>
                    Made with &#10084; by <a href="https://github.com/gabrielEmilio00" target="_blank" rel="noopener noreferrer">Gabriel Emilio</a>. With the helped of <a href="https://youtube.com/codebucks" target="_blank" rel="noopener noreferrer">CodeBucks</a>
                </span>
            </Bottom>
        </Section>
    )
} 