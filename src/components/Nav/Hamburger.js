import React from "react";
import styled from "styled-components"

const StyledHamburger = styled.div`
    width: 2em;
    height: 2em;
    margin-left: 24px;
    cursor: pointer;
    display: none;
    z-index: 111;


    @media (max-width: 824px){
        display: flex;
        justify-content: space-around;
        flex-flow: column wrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: white;
        transform-origin: 1px;
        transition: all 0.15s ease-in;

        &:nth-child(1){
            transform: ${({open}) => open ? "rotate(45deg)" : "rotate(0)"};
        }
        &:nth-child(2){
            opacity: ${({open}) => open ? "0" : "1"};
        }
        &:nth-child(3){
            transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`

const Hamburger = ({open, setOpen}) => <StyledHamburger open={open} onClick={() => {setOpen(!open)}}>
    <div></div>
    <div></div>
    <div></div>
</StyledHamburger>

export default Hamburger