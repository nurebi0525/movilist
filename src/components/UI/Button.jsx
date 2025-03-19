import React from 'react'
import styled from 'styled-components'

export const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
    color: white;
    background-color: blue;
    border: 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
`