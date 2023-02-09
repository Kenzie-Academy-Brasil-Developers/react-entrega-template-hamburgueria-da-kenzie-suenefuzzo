import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
  padding: 10px;

  .container__searchResult {
    margin-top: 10px;
    margin-bottom: 15px;

    p{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-4);
        color: var(--grey-100);
    }

    button{
        height: 40px;
        margin-top: 10px;
        background-color: var(--color-primary);
        padding: 11px 20px;
        border: none;
        border-radius: var(--radius-default);
        color: var(--color-white);

        :hover{
            background-color: var(--color-primary-50);
        }
    }
  }
  /* @media (min-width: 1024px){
    width: 900px;
    margin: 0 auto;
    display: flex;
  }

  @media (min-width: 1370px){
    max-width: 1370px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  } */
`;
