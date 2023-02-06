import React from "react";
import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <img src="./logo.svg" alt="Logo" />
      <form>
        <InputSearch />
        <Button />
      </form>
    </StyledHeader>
  );
};
