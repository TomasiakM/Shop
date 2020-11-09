import React from "react"
import {useSelector} from "react-redux"

//STYLED
import { StyledLink, Container, Ul } from "./StyledCategories"

const Categories = ({ open, setOpen }) => {
    const categories = useSelector((state) => state.products)

    let arr = []

    for(let property in categories){
      property = categories[property]
      arr.push(<StyledLink key={property.id} to={`/${property.id}`} onClick={() => setOpen(!open)}>{property.category}</StyledLink>)
    }

  return (
    <Container open={open}>
      <Ul>
        {arr}
      </Ul>
    </Container>
  );
}

export default Categories
