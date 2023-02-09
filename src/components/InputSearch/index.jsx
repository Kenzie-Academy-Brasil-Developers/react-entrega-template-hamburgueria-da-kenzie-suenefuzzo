import React from "react"

export const InputSearch = ({setSearchValue, searhValue}) => {
  return (
      <input value={searhValue} onChange={(event) => setSearchValue(event.target.value)} type="text" placeholder="Digitar pesquisa"/>
  )
}


