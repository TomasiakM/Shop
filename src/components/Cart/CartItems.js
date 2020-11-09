import React from "react"
import { useSelector } from "react-redux"

//STYLED
import { Container, LeftSection, RightSection, CartInfo, DeliveryButton } from "./StyledCartItems"

//COMPONENTS
import CartProduct from "./CartProduct"



const CartItems = () => {
    const cart = useSelector((state) => state.cart)
    const products = useSelector((state) => state.products)


    const totalValue = cart.reduce(function(total, arr){
        const itemPrice = (Math.round(parseFloat(products[arr.category].items.find((e) => e.id === arr.id).price) * 100) / 100).toFixed(2)
        return total + (arr.quantity * itemPrice)
    }, 0)

    return (
        <Container>
            <LeftSection>
                {cart.map((item) => <CartProduct key={item.id} item={item} />)}
            </LeftSection>
            <RightSection>
                <CartInfo>
                    <span>Łączna kwota</span>
                    <span>{totalValue.toFixed(2).toString().replace(".", ",")}zł</span>
                </CartInfo>
                <DeliveryButton>Przejdź do dostawy</DeliveryButton>
            </RightSection>
        </Container>
    )
}

export default CartItems