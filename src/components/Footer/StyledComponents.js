import styled from "styled-components"

export const Container = styled.div`
    padding: 10px;

    @media (max-width: 824px){
        padding: 20px;
    }

    svg {
        margin-bottom: 6px;
    }

    p {
        margin: 6px;
    }

    p span{
        color: #44bd32;
    }

    p a, p button{
        color: white;
        text-decoration: none;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            color: #44bd32;
        }
    }
`

export const Hours = styled.div`
    font-size: 12px;
`