import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

//SVG
import CartIcon from "../svg/CartIcon"
import Logo from "../svg/Logo"

//STYLED
import { Container, Div, RightSide, Span } from "./StyledNav"

//COMPONENTS
import Categories from "./Categories"
import Hamburger from "./Hamburger"



const Nav = () => {
    const [open, setOpen] = useState(false)

    const cart = useSelector((state) => state.cart);

    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)

    return (
    <>
        <Container>
            <Div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div style={{display: "flex",}}>
                        <Logo />
                        <h2 style={{paddingLeft: "8px"}}>CompShop</h2>
                    </div>
                </Link>
                <RightSide>
                    <Link to="/cart" style={{ textDecoration: 'none', position: "relative"  }}>
                        <CartIcon/>
                        {itemsInCart > 99 ? <Span>99+</Span> : itemsInCart > 0 ? <Span>{itemsInCart}</Span> : ""}
                    </Link>
                    <Hamburger open={open} setOpen={setOpen} />
                </RightSide>
            </Div>
            <Categories open={open} setOpen={setOpen} />
        </Container>
    </>
    )
}

export default Nav