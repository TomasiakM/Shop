import React, { useState, useEffect } from "react"
import styled from "styled-components"

//COMPONENTS
import RecomendedProduct from "./RecomendedProduct"
import Button from "./Button"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #2f3640;
    border-radius: 6px;
    position: relative;
`
const Header = styled.div`
    width: 100%;
    font-size: 24px;
    padding: 10px;
    border-bottom: 1px solid #44bd32;
`

const Slider = styled.div`
    display: flex;
    width: 100%;
    padding: 6px;
    overflow: hidden;
`



const RecomendedProducts = () => {
    const [x, setX] = useState(0)
    const [width, setWidth] = useState(0)

    const itemsInSlide = [
        {category: "graphic-cards", id: "rtx-2060"},
        {category: "processors", id: "ryzen-5-3600"},
        {category: "graphic-cards", id: "gtx-1660"},
        {category: "processors", id: "i7-10700"},
        {category: "graphic-cards", id: "rtx-2070"},
    ]

    const handleWidthChange = () => {
        setX(0)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
            window.addEventListener("resize", handleWidthChange);
            setWidth(window.innerWidth)

            return () => window.removeEventListener("resize", handleWidthChange);
    }, [])


    const goLeft = () => {
         return x === 0 ? "" :  setX(x - 100);
    }
    const goRight = () => {
        if(width > 824) {
            return x === ((itemsInSlide.length - 3) * 100) ? "" : setX(x + 100)
        } else if(width > 450) {
            return x === ((itemsInSlide.length - 2) * 100) ? "" : setX(x + 100)
        } else
        return x === ((itemsInSlide.length - 1) * 100) ? "" : setX(x + 100)
    }

    return (
        <Container>
            <Header>Polecamy</Header>
            <Slider>
                {itemsInSlide.map((item) => <RecomendedProduct key={item.id} id={item.id} category={item.category} x={-x}/>)}
            </Slider>
            <div onClick={goLeft}>
                <Button></Button>
            </div>
            <div onClick={goRight}>
                <Button right></Button>
            </div>
        </Container>
    )
}

export default RecomendedProducts