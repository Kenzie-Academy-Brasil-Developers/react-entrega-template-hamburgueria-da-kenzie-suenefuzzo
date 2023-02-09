import React from "react"
import { StyledDefaultButton } from "./style"

export const Button = ({children, addItemToCart, item}) => {
  return (
    <StyledDefaultButton onClick={() => addItemToCart(item)}>
      {children}
    </StyledDefaultButton>
  )
}


