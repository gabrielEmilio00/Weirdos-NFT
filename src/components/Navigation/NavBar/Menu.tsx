import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

interface Responsive {
    o?: {
        click?: boolean;
    }
}


const MenuList = styled.ul<Responsive>`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em) {
    /* 1024px */
    display: ${props => props.o?.click ? 'flex' : 'none'};
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    
    transform: ${props => props.o?.click ? 'translateY(0)' : 'translateY(100%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content:center;

    touch-action: none;
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after {
    content: '';
    display: block;
    width:0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}

&:hover::after {
    width:100%;
}

@media (max-width: 64em) {
    margin: 1rem 0;

    &::after { 
    display: none;
}
}

`
const HamburgerMenu = styled.span<Responsive>`
width: ${props => props.o?.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.o?.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'  };

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
    /* 1024px */
    display: flex;
}

&::after, &::before {
    content: ' ';
    width: ${props => props.o?.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.o?.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
}
&::after {
    top: ${props => props.o?.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.o?.click ? 'rotate(-40deg)' : 'rotate(0)'  };
}
&::before {
    bottom: ${props => props.o?.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.o?.click ? 'rotate(40deg)' : 'rotate(0)'  };
}
`

export default function Menu() {
    
    const [click, setClick] = useState(false);

    

    const scrollTo = (id: string) => {
        
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })

    setClick(!click);
    }

    return(
        <>
            <HamburgerMenu o={({click: click})} onClick={() => { setClick(!click); console.log(click);}}>
                    &nbsp;
            </HamburgerMenu>
            <MenuList o={({click: click})}>
                <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
                <MenuItem onClick={() => scrollTo('showcase')}>ShowCase</MenuItem>
                <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
                <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                <MenuItem className="">
                    <div className="mobile">
                        <Button text="Connect Wallet" link="https://google.com"/>
                    </div>
                </MenuItem>
            </MenuList>
        </>

    )
}