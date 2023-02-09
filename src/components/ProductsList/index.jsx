import React from "react"
import { Product } from "../Product"
import { StyledProductList } from "./style"

export const ProductList = ({filteredList, addItemToCart}) => {

  return (
    <StyledProductList>
      {filteredList.map((item) => {
        return (
          <Product key={item.id} item={item} addItemToCart={addItemToCart}/>
        )
      })}
    </StyledProductList>
  )
}


