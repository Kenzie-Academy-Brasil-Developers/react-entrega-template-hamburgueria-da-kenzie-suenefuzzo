import React from "react";
import { Button } from "../Button";
import { StyledCartProduct } from "./style";

export const CartProduct = () => {
  return (
    <StyledCartProduct>
      <img src="./product.svg" alt="" />
      <div>
        <div>
          <h3>Hamburguer</h3>
          <small>Sanduíches</small>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </StyledCartProduct>
  );
};
