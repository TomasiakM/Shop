import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

//REDUCERS
import { removeItemFromCart, increaseItemInCart, decreaseItemInCart } from "../../reducers/cart/action"

//SVG
import PlusIcon from "../svg/PlusIcon"
import MinusIcon from "../svg/MinusIcon"
import DeleteIcon from "../svg/DeleteIcon"

//STYLED
import { ImageContainer, StyledImage, DivItem, AmountDiv, Button, DivDetail, Icon, Container, ItemInfo } from "./StyledCartProduct"




const CartProduct = ({ item }) => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const product = products[item.category].items.find((product) => product.id === item.id);

    return (
        <Container>
            <ItemInfo>
                <ImageContainer to={`/${item.category}/${item.id}`}><StyledImage src={require(`../img/${item.category}/${product.img}`)} alt={item.name }/></ImageContainer>
                <DivItem>
                    <Link to={`/${item.category}/${item.id}`}>{product.name}</Link>
                    <AmountDiv>
                        <div>
                            <Button onClick={() => dispatch({type: increaseItemInCart, payload: item.id})}><PlusIcon /></Button>
                        </div>
                        <div>{item.quantity}</div>
                        <div>
                            <Button onClick={() => dispatch({type: decreaseItemInCart, payload: item.id})}><MinusIcon /></Button>
                        </div>
                    </AmountDiv>
                </DivItem>
            </ItemInfo>
            <DivDetail>
                <div>{product.price.toString().replace(".", ",")}zł</div>

                <div><Icon onClick={() => dispatch({ type: removeItemFromCart, payload: item.id } )}><DeleteIcon /></Icon></div>
            </DivDetail>
        </Container>
    )
}

export default CartProduct