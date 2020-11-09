import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    min-width: calc(1/3 * 100%);
    text-decoration: none;
    margin: 6px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(calc(${(state) => state.x}%));
    transition: all 0.3s ease;


    &:hover{
      box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);

      div:nth-child(2){
          transition: all 0.3s ease;
          color: #44bd32;
      }
    }

    @media (max-width: 824px){
        min-width: 50%;
    }

    @media (max-width: 450px){
        min-width: 100%;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImg = styled.img`
    padding: 10px;
    width: 80%;

    @media (max-width: 824px){
        max-width: 200px;
    }

    @media (max-width: 400px){
        width: 50%;
    }
`

export const Name = styled.div`
    padding: 10px;
    text-align: center;
`