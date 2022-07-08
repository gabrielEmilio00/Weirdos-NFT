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
    return(
        <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Roadmap</MenuItem>
            <MenuItem>ShowCase</MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>Faq</MenuItem>
        </MenuList>

    )
}