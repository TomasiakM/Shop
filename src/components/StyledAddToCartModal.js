import styled from "styled-components"
import { Link } from "react-router-dom"
import ReactModal from 'react-modal'

export const StyledModal = styled(ReactModal)`
        width: 400px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2f3640;
        border-radius: 6px;
        outline: none;
        min-width: 320px;

        @media (max-width: 824px){
            width: 100%;
        }

        @media (max-width: 320px){
            left: 0;
            transform: translate(0, -50%)
        }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #44bd32;
`

export const ModalContent = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
`

export const ModalFooter = styled.div`
    border-top: 1px solid #44bd32;
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

export const StyledButton = styled.button`
    padding: 8px;
    background-color: transparent;
    color: white;
    outline: none;
    border: none;
    transition: all 0.3s ease;

    &:hover{
        color: #44bd32;
    }
`

export const StyledLink = styled(Link)`
    padding: 8px;
    border: 1px solid #44bd32;
    background-color: transparent;
    color: white;
    outline: none;
    border-radius: 40px;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        background-color: #44bd32;
    }
`

export const StyledImg = styled.img`
    width: 100px;
`