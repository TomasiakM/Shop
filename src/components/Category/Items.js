import React, { useState } from "react"
import styled from "styled-components"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"

//COMPONENTS
import ItemCard from "./ItemCard"
import Filter from "./Filter"
import { useEffect } from "react"

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

const ItemsHeader = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    color: black;

    @media(max-width: 824px){
      flex-direction: column;
    }
`

const Reference = styled.div`
    padding: 6px 0;

`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Items = ({ match }) => {
    const [filter, setFilter] = useState("default")

    const categories = useSelector((state) => state.products[match.params.category]);
    const items = categories.items;

    useEffect(() => {
      setFilter("default")
    }, [categories.id])

    const handleChange = (e) => {
      setFilter(e.value)
    }

    if(filter === "price-desc") items.sort((a, b) => b.price - a.price)
    else if(filter === "price-asc") items.sort((a, b) => a.price - b.price)
    else if(filter === "name-desc") items.sort((a, b) => b.name.localeCompare(a.name))
    else if(filter === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name))
    else items.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <Container>
        <ItemsHeader>
            <Reference>
              <StyledLink to="/">CompShop</StyledLink>
              {" / "}
              {categories.category}
            </Reference>
            <Filter filter={filter} handleChange={handleChange} />
        </ItemsHeader>
        {items.map((item) => <ItemCard key={item.id} item={item} category={categories.id} />)}
      </Container>
    </>
  );
}

export default Items
