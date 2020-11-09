import React from "react"
import styled from "styled-components"
import ArrowIcon from "../../svg/ArrowIcon"

const Container = styled.div`
    position: absolute;
    top: 50%;
    padding: 12px;
    border-radius: 50%;
    ${(state) => state.right ? "right: 20px;" : "left: 20px;"}
    ${(state) => state.right ? "transform: rotate(180deg);" : ""}
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        background-color:  rgba(255, 255, 255, 0.2);
        svg {
            transition: all 0.5s ease;
            fill: #44bd32;
        }
    }
`

const Button = ({ right }) => {
    return(
        <Container right={right}>
            <ArrowIcon />
        </Container>
    )
}

export default Button