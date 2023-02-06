import React from "react"
import { Button } from "../Button"
import { StyledCartTotal } from "./style"

export const CartTotal = () => {
  return (
    <StyledCartTotal>
      <div className="container__total">
        <p className="title">Total</p>
        <p className="price">R$ 40.00</p>
      </div>
      <Button>Remover todos</Button>
    </StyledCartTotal>
  )
}


