import React from 'react'

//STYLED
import { Container, Hours } from "./StyledComponents"

const Contact = () => {
    return (
        <Container>
            <p>+48 123456789</p>
            <Hours>
                <p><span>Pon. - Pt.</span> 8:00 - 20:00</p>
                <p><span>Sob.</span> 10:00 - 16:00</p>
            </Hours>
            <p><a href="mailto:example@domain.com">example@domain.com</a></p>
        </Container>
    )
}

export default Contact