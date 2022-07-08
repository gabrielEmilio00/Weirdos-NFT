import React from "react";
import styled from "styled-components";
import Button from "./NavBar/Button";
import Logo from "./NavBar/Logo";
import Menu from "./NavBar/Menu";

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`
const NavBar = styled.section`
display: flex;
justify-content: space-between;
align-items:center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`


export default function Navigation() {
    return ( 

        <Section>
            <NavBar>
                <Logo />
                <Menu />
                <Button text="Connect Wallet" link="https://google.com"/>
            </NavBar>
        </Section>

    )
}