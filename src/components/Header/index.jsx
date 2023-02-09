import React, { useState } from "react";
// import { Button } from "../Button";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ setFilteredProducts }) => {
  const [searhValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setFilteredProducts(searhValue);
    setSearchValue("");
  };

  return (
    <StyledHeader>
      <div className="container__header">
        <img src="./logo.svg" alt="Logo" />
        <form onSubmit={submit}>
          <InputSearch
            setSearchValue={setSearchValue}
            searhValue={searhValue}
          />
          <button>Pesquisar</button>
        </form>
      </div>
    </StyledHeader>
  );
};
