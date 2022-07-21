import React from "react";
import styled from "styled-components";

const MenuList = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
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
`

export default function Menu() {
    
    const scrollTo = (id: string) => {
        
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    return(
        <MenuList>
            <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
            <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
            <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
            <MenuItem onClick={() => scrollTo('showcase')}>ShowCase</MenuItem>
            <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
            <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </MenuList>

    )
}