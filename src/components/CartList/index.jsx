import React from "react";
import { StyledCartList } from "./style";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export const CartList = () => {
  return (
    <StyledCartList>
      <h1>Carrinho de compras</h1>
      {/* <div>
        <h2>Sua sacola está vazia</h2>
        <small>Adicione itens</small>
      </div> */}
      <ul>
        <CartProduct/>
        <CartTotal/>
      </ul>
      
    </StyledCartList>
  );
};
