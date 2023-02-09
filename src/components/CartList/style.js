import styled from "styled-components";

export const StyledCartList = styled.aside`
  border-radius: var(--radius-secondary);
  margin-top: 20px;
  min-height: 300px;

  h1 {
    background-color: var(--color-primary);
    color: var(--color-white);
    height: 65px;
    text-align: center;
    border-top-left-radius: var(--radius-secondary);
    border-top-right-radius: var(--radius-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    background-color: var(--grey-0);
    border-bottom-left-radius: var(--radius-secondary);
    border-bottom-right-radius: var(--radius-secondary);
    min-height: 235px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container__emptyCart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 158px;
    background-color: var(--grey-0);
    border-bottom-left-radius: var(--radius-secondary);
    border-bottom-right-radius: var(--radius-secondary);

    h2 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-100);
    }

    small {
      font-size: var(--font-size-5);
      font-weight: var(--font-weight-4);
      color: var(--grey-50);
    }
  }



  @media (min-width: 1024px){
    width: 26%;
    margin-top: 0;
  }
`;
