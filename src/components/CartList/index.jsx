import React from "react";
import { StyledCartList } from "./style";
import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";

export const CartList = ({ currentSale, removeItemFromCart, setCurrentSale}) => {
  return (
    <StyledCartList>
      <h1>Carrinho de compras</h1>
      {currentSale.length > 0 ? (
        <ul>
          {currentSale.map((item) => {
            return <CartProduct key={item.id} item={item} removeItemFromCart={removeItemFromCart}/>;
          })}
          <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        </ul>
      ) : (
        <div className="container__emptyCart">
          <h2>Sua sacola está vazia</h2>
          <small>Adicione itens</small>
        </div>
      )}
    </StyledCartList>
  );
};
