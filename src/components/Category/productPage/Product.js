import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

//REDUCENRS
import { addItemToCart } from "../../../reducers/cart/action"

//SVG
import MinusIcon from "../../svg/MinusIcon"
import PlusIcon from "../../svg/PlusIcon"

//STYLED
import { Container, TopSection, TopLeftSection, StyledImg, TopRightSection, AmountDiv, Button, AddToCartButton, Description, Specyfication, Row, Col } from "./StyledProduct"

//COMPONENTS
import AddToCartModal from "../../AddToCartModal"

const Product = ( { match } ) => {
    const [amount, setAmount] = useState(1)
    const [isModalOpen, setModalOpen] = useState(false)

    const {category, productId} = match.params

    const dispatch= useDispatch()

    let product = useSelector((e) => e.products)
    product = product[category].items.find((e) => e.id === productId)
    return (
        <Container>
            <TopSection>
                <TopLeftSection>
                <StyledImg src={require(`../../img/${category}/${product.img}`)} alt={product.name} />
            </TopLeftSection>
            <TopRightSection>
                <h2>{ product.name }</h2>
                <div>
                    <AmountDiv>
                        <div>
                            <Button onClick={() => setAmount(amount + 1)}><PlusIcon /></Button>
                        </div>
                        <div>{amount}</div>
                        <div>
                            <Button onClick={() => amount > 1 ? setAmount(amount - 1) : ""}><MinusIcon /></Button>
                        </div>
                    </AmountDiv>
                    <AddToCartButton onClick={() => {
                        dispatch({type: addItemToCart, payload: { id: product.id, category: category, quantity: amount}});
                        setAmount(1);
                        setModalOpen(true)
                    }}>Dodaj do koszyka</AddToCartButton>
                </div>
            </TopRightSection>
            </TopSection>
            <Description>
                <h1>{product.name}</h1>
                <h4>{product.description}</h4>
            </Description>
            <Specyfication>
                    {product.specification.map((e) => <Row key={e.name}><Col>{e.name}</Col><Col>{e.value}</Col></Row> )}
            </Specyfication>
            <AddToCartModal item={product} category={category} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        </Container>
    )
}

export default Product