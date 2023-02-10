import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  flex-wrap: nowrap;
  height: 360px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    overflow-x: unset;
    width: 62%;
  }
  
  @media (min-width: 1440px){
    height: fit-content;
    width: 70%;
  } 
`;
