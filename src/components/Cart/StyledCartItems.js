import styled from "styled-components"

export const Container= styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 824px){
        flex-direction: column;
    }
`

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const RightSection = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 320px;
    padding: 12px;
    background-color: #2f3640;
    border-radius: 6px;
    margin: 0 auto;
    align-self: start;

    @media (max-width: 824px){
        margin-top: 20px;
    }
`

export const CartInfo = styled.p`
    display: flex;
    justify-content: space-between;
`

export const DeliveryButton = styled.button`
    width: 100%;
    margin-top: 20px;
    background: transparent;
    border: 1px solid #44bd32;
    border-radius: 40px;
    padding: 0.5rem 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color: #44bd32;
    }
`