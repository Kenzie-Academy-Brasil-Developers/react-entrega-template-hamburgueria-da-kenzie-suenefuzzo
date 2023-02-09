import React from "react";
import { StyledRemoveButton } from "../Button/style";
import { StyledCartProduct } from "./style";

export const CartProduct = ({item, removeItemFromCart}) => {
  return (
    <StyledCartProduct>
      <img src={item.img} alt={item.name} />
      <div className="container__itemInfoAndButton">
        <div className="container__itemInfo">
          <h3>{item.name}</h3>
          <small>{item.category}</small>
        </div>
        <div>
          <StyledRemoveButton onClick={() => removeItemFromCart(item.id)}>Remover</StyledRemoveButton>
        </div>
      </div>
    </StyledCartProduct>
  );
};
