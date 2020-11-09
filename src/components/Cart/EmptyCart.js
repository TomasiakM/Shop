import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    padding: 20px;
    text-align: center;
`

const Button = styled(Link)`
    padding: 0.5rem 2rem;
    margin-top: 20px;
    width: 100%;
    border: 1px solid #44bd32;
    background-color: transparent;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover{
        background-color: #44bd32;
    }
`

const EmptyCart = () => {
    return (
        <Div>
            <h3>Twój koszyk jest pusty</h3>
            <Button to={"/"}>
               Przejdź do strony głównej
            </Button>
        </Div>
    )
}

export default EmptyCart