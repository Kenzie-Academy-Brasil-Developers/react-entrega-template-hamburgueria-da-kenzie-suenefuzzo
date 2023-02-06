import React from "react";
import { Button } from "../Button";
import { StyledCartProduct } from "./style";

export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <img src="./product.svg" alt="" />
      <div className="container__itemInfoAndButton">
        <div className="container__itemInfo">
          <h3>Hamburguer</h3>
          <small>Sanduíches</small>
        </div>
        <div>
          <Button>Remover</Button>
        </div>
      </div>
    </StyledCartProduct>
  );
};
