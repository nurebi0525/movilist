import React from 'react'
import styled from 'styled-components'

export const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
    color: "#BDBDBD";
    background-color:#757575 ;
    border: 0;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
`
//  border: "#BDBDBD";
// color: #757575;