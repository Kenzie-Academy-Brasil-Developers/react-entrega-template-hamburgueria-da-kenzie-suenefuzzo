import React from "react";
import { StyledCartTotal } from "./style";

export const CartTotal = ({ currentSale, setCurrentSale }) => {
  const totalPrice = currentSale.reduce(
    (previewsValue, item) => previewsValue + Number(item.price),
    0
  );

  const removeAll = () => {
    localStorage.removeItem("@cartList");
    setCurrentSale([]);
  };

  return (
    <StyledCartTotal>
      <div className="container__total">
        <p className="title">Total</p>
        <p className="price">R$ {Number(totalPrice).toFixed(2)}</p>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </StyledCartTotal>
  );
};
