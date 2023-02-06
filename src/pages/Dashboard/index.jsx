import React from "react";
import { CartList } from "../../components/CartList";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductsList";
import { StyledMain } from "./style";

export const Dashboard = () => {
  return (
  <>
    <Header/>
    <StyledMain>
        <ProductList/>
        <CartList/>
    </StyledMain>
  </>
  )
}
