import React from 'react'
import styled from "styled-components"

//COMPONENTS
import Links from "./Links"
import Contact from "./Contact"

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    min-width: 320px;
    margin: 0 auto;
`
const StyledContent = styled.div`
    background-color: #2f3640;
    padding: 10px;
    display: flex;
    justify-content: space-around;

    @media(max-width: 824px){
        text-align: center;
        align-items: center;
        flex-direction: column;
    }
`

const Footer = () => {
    return (
        <Container>
            <StyledContent>
                <Links />
                <Contact />
            </StyledContent>
        </Container>
    )
}

export default Footer