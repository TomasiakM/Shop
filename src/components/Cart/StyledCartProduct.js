import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: calc(100% - 20px);
    min-width: 320px;
    margin: 0 auto 6px;
    justify-content: space-between;
    background-color: #2f3640;
    border-radius: 6px;

    @media (max-width: 600px){
        font-size: 16px;
    }

`

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const DivItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 824px){
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }
`

export const DivDetail = styled.div`
    display: flex;
    align-items: center;
    margin-right: 6px;
`

export const ImageContainer = styled(Link)`
    padding: 8px;
    width: 100px;
`

export const StyledImage = styled.img`
    width: 100%;
`

export const Icon = styled.span`
    padding: 4px;
    margin-left: 6px;
    border-radius: 50%;
    background-color: #c23616;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline:none;
`

export const AmountDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
`