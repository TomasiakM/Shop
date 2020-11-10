import React from 'react'
import Select from 'react-select'
import styled from "styled-components"

const Container = styled.div`
    width: 250px;

    @media (max-width: 824px){
        align-self: center;
    }
`

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#2f3640",
        border: "1px solid white",
        cursor: "pointer",
        color: "white",
        outline: "none",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#2f3640",
        border: "1px solid white",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#44bd32' : state.isFocused ? '#353b48' : '#2f3640',
        color: state.isSelected ? 'white' : state.isFocused ? '#44bd32' : 'white',
        padding: 10,
        cursor: 'pointer',
    }),
    singleValue: (provided, state) => {
        const color = "white";
        const backgroundColor = state.isDisabled ? "" : 1;
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, color, backgroundColor, opacity, transition };
    }
}

const options = [
  { value: 'default', label: 'Domyślnie' },
  { value: 'price-asc', label: 'Cena rosnąco' },
  { value: 'price-desc', label: 'Cena malejąco' },
  { value: 'name-asc', label: 'Nazwa A-Z' },
  { value: 'name-desc', label: 'Nazwa Z-A' },
]

const Filter = ({ filter, handleChange }) => {
    return (
        <Container>
            <Select
                value={options.filter((option) => option.value === filter)}
                options={options}
                styles={customStyles}
                isSearchable={false}
                onChange={handleChange}>
            </Select>
        </Container>
    )
}

export default Filter