import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    background-color: #2f3640;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    margin: 6px;
    position: relative;
    padding: 10px;
    width: calc(1/3 * 100% - 12px);

    &:hover{
      box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
    }

    @media (max-width: 824px) {
        width: 100%;
        margin: 6px 0;
    }
`

export const StyledData = styled.div`
    @media (max-width: 824px) {
        justify-content: start;
     }
`

export const Price = styled.p`
    margin-top: 36px;
    font-size: 18px;
`

export const AddToCart = styled.span`
     position: absolute;
     bottom: 0.3rem;
     right: 0.3rem;
     border: 1px solid #44bd32;
     border-radius: 50%;
     width: 3rem;
     height: 3rem;
     display: flex;
     justify-content: center;
     cursor: pointer;
     align-items: center;
     transition: all 0.3s ease;

     &:hover {
        background-color: #44bd32;
        opacity: 1;
     }


`

export const StyledInfo = styled.div`
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;

     @media (max-width: 824px){
       padding: 20px;
       width: auto;
     }
`

export const StyledLink = styled(Link)`
     text-decoration: none;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     min-height: 350px;

     + span {
          opacity: 0;
    }


    @media (max-width: 824px){
      min-height: auto;
      width: 100%;
      flex-direction: row;
      justify-content: start;
      + span{
        opacity: 1;
      }
    }

    &:hover + span {
          opacity: 1;
    }

`

export const StyldedImgContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 824px){
      width: 120px;
    }

    @media (max-width: 400px){
      width: 80px;
    }
`

export const StyledImg = styled.img`
    width: 80%;

    @media (max-width: 824px){
      max-width: 250px;
      width: 100%;
      margin: 20px 0;
    }
`