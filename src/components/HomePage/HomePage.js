import React from "react"
import styled from "styled-components"
import RecomendedProducts from "./RecomendedProducts/RecomendedProducts"

const Container = styled.div`
    width: 100%;
`

const HomePage = () => {
    return (
        <Container>
            <RecomendedProducts />
        </Container>
    )
}

export default HomePage