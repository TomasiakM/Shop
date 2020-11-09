import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  transition: top 0.3s ease;
  z-index: 110;


  @media (max-width: 824px){
    position: fixed;
    width: 100%;
    top: ${({open}) => open ? "0" : "-400px" };
    border-bottom: 1px solid #44bd32;
    margin-top: 60px;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  background-color: #2f3640;
  margin: 0 auto;
  border-bottom: 1px solid #44bd32;

  @media (max-width: 824px){
    flex-flow: column nowrap;
    width: 100%;
  }
`

export const StyledLink = styled(Link)`
  padding: 6px 12px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  text-decoration: none;
  font-size: 22px;
  transition: all 0.3s ease;

  &:hover{
    background-color: #353b48;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
    color: #44bd32;
  }

  @media (max-width: 824px){
      width: 100%;
      max-width: 400px;
      margin: 6px auto;
      text-align: center;
      flex-grow: 1;
      flex-basis: 0;

      &:hover{
         box-shadow: none;
      }
    }
`