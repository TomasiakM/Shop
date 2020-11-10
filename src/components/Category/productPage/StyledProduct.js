import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #2f3640;
    border-radius: 6px;
    min-width: 320px;
`

export const TopSection = styled.div`
    display: flex;
    min-height: 300px;
    align-items: center;
    width: 100%;
    min-height: 400px;
    @media (max-width: 824px){
        flex-direction: column;
    }
`

export const TopLeftSection = styled.div`
    width: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (max-width: 824px){
        width: 100%;
        max-width: 400px;
        width: 100%;
    }
`

export const StyledImg = styled.img`
    width: 80%;
    min-width: 250px;
`

export const TopRightSection = styled.div`
    width: 50%;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    @media (max-width: 824px){
        width: 100%;
    }
`

export const AmountDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
`

export const AddToCartButton = styled.button`
    background-color: transparent;
    border: 1px solid #44bd32;
    border-radius: 40px;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease;
    outline: none;

    &:hover{
        background-color: #44bd32;
    }
`

export const Description = styled.div`
    padding: 20px;

    @media(max-width: 824px;){
        padding: 10px;
    }
`

export const Specyfication = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 100%;

    @media (max-width: 824px){
        width: 100%
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #44bd32;

    &:nth-child(2n-1){
        background-color: #353b48;
    }
`

export const Col = styled.div`
    width: 50%;
    padding 6px;

    &:nth-child(2n){
        align-self: end;
    }
`

export const Reference = styled.div`
    padding: 6px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`