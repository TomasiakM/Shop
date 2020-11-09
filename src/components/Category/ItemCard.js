import React, { useState } from "react"
import { useDispatch } from "react-redux"

//REDUCERS
import { addItemToCart } from "../../reducers/cart/action"

//SVG
import AddToCartIcon from "../svg/AddToCartIcon"

//STYLED
import { Container ,StyledLink, StyldedImgContainer, StyledImg, StyledData, StyledInfo, Price, AddToCart } from "./StyledCard"

//COMPONENTS
import AddToCartModal from "../AddToCartModal"



const ItemCard = ({ item, category }) =>{
   const [isModalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <StyledLink to={`/${category}/${item.id}`}>
            <StyldedImgContainer>
                <StyledImg src={require(`../img/${category}/${item.img}`)} alt={item.name} />
            </StyldedImgContainer>
            <StyledData>
              <StyledInfo>
                <h3>{item.name}</h3>
                <Price>{item.price.toString().replace(".", ",")} zł</Price>
              </StyledInfo>
            </StyledData>
        </StyledLink>
        <AddToCart onClick={() => {
              dispatch({type: addItemToCart, payload: { id: item.id, category: category, quantity: 1}})
              setModalOpen(true)
            }
          }>
            <AddToCartIcon/>
        </AddToCart>
      </Container>
      <AddToCartModal item={item} category={category} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default ItemCard
