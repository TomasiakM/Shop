import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"

//COMPONENTS
import Product from "./Category/productPage/Product"
import Items from "./Category/Items"
import Cart from "./Cart/Cart"
import HomePage from "./HomePage/HomePage"

const Container = styled.div`
  padding: 120px 0 20px;
  width: 100%;
  max-width: 1000px;
  min-width: 320px;
  margin: 0 auto;
  min-height: calc(100vh - 142px);

  @media(max-width: 824px){
    padding-top: 80px;
    min-height: calc(100vh - 296px);
  }
`

const Main = () => {
  return (
      <Container>
        <Switch>
          <Route path={"/cart"} component={Cart} />
          <Route path={"/:category/:productId"} component={Product} />
          <Route path={"/:category"} component={Items} />
          <Route path={"/"} component={HomePage} />
        </Switch>
      </Container>
  )
}

export default Main
