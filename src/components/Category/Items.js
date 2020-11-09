import React from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"

//COMPONENTS
import ItemCard from "./ItemCard"

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

     @media (max-width: 1224px) {
        width: 1000px;
    }

    @media (max-width: 1024px) {
        width: 800px;
    }
    @media (max-width: 824px) {
        width: 100%;
        min-width: 320px;
    }
`

const Items = ( {match} ) => {
    const categories = useSelector((state) => state.products[match.params.category]);
    const items = categories.items;

  return (
    <>
      <Container>
        {items.map((item) => <ItemCard key={item.id} item={item} category={categories.id} />)}
      </Container>
    </>
  );
}

export default Items
