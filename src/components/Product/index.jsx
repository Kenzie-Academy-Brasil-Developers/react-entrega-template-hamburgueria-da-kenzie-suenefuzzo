import React from "react";
import { Button } from "../Button";
import { StyledProduct } from "./style";

export const Product = ({ item, addItemToCart }) => {

  return (
    <StyledProduct>
      <div className="container__image">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="container__itemInfo">
        <h2>{item.name}</h2>
        <small>{item.category}</small>
        <p>R$ {Number(item.price).toFixed(2)}</p>
        <Button item={item} addItemToCart={addItemToCart}>Adicionar</Button>
      </div>
    </StyledProduct>
  );
};
