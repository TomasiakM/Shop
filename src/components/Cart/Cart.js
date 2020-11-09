import React from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"

//COMPONENTS
import EmptyCart from "./EmptyCart"
import CartItems from "./CartItems"

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto;
    justify-content: center;
`

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <Container>
            {cart.length > 0 ? <CartItems /> : <EmptyCart />}
        </Container>
    )
}

export default Cart