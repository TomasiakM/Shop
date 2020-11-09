import React from 'react'

//STYLED
import {StyledModal, ModalHeader, ModalContent, ModalFooter, StyledImg, StyledButton, StyledLink} from "./StyledAddToCartModal"


const AddToCartModal = ({ item, category, isModalOpen, setModalOpen }) =>{
    StyledModal.setAppElement('body');
    return (
        <StyledModal
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
                overlay: {  backgroundColor: "rgba(0, 0, 0, 0.4)"},
            }}
        >
            <ModalHeader>
                <h3>Produkt dodano do koszyka</h3>
                <span onClick={() => setModalOpen(false)}>X</span>
            </ModalHeader>
            <ModalContent>
                <div><StyledImg src={require(`./img/${category}/${item.img}`)} alt={item.name}/></div>
                <div style={{marginLeft: "6px"}}>{item.name}</div>
            </ModalContent>
            <ModalFooter>
                <StyledButton onClick={() => setModalOpen(false)}>Kontynuuj zakupy</StyledButton>
                <StyledLink to={"/cart"}>Przejdź do koszyka</StyledLink>
            </ModalFooter>
        </StyledModal>
    )
}

export default AddToCartModal