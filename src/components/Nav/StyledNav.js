import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    width: 100%;
    z-index:111;
`

export const Span = styled.span`
    position: absolute;
    border-radius: 50%;
    top: 15px;
    left: 19px;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    text-align: center;
`

export const Div = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    z-index: 111;
    background-color: #2f3640;

    @media(max-width: 824px){
        border-bottom: 1px solid #44bd32;
    }
`

export const RightSide = styled.div`
    display: flex;
`