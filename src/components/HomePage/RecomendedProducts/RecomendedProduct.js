import React from "react"
import { useSelector } from "react-redux"

//STYLED
import { Container, ImageContainer, StyledImg, Name } from "./StyledRecomendedProduct"

const RecomendedProduct = ({ x, id, category }) => {
    const product = useSelector((store) => store.products[category].items.filter(e => e.id === id)[0])

    return (
        <Container to={`/${category}/${id}`} x={x} >
            <ImageContainer>
                <StyledImg src={require(`../../img/${category}/${product.img}`)} alt={product.name} />
            </ImageContainer>
            <Name>{product.name}</Name>
        </Container>
    )
}

export default RecomendedProduct