import React from "react";
import { Button } from "../Button";
import { StyledProduct } from "./style";

export const Product = () => {
  return (
    <StyledProduct>
      <img src="./product.svg" alt="" />
      <div>
        <h2>Hamburguer</h2>
        <small>Sanduíches</small>
        <p>R$ 14.00</p>
        <Button />
      </div>
    </StyledProduct>
  );
};
