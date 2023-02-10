import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 8.688rem;
  background-color: var(--grey-0);

  .container__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.197rem;
    padding-top: 23px;

    img {
      width: 9.375rem;
    }

    form {
      display: flex;
      align-items: center;
      width: 95%;

      position: relative;

      input {
        width: 100%;
        height: 3.5rem;
        background-color: #ffffff;
        border-radius: var(--radius-default);
        border: 2px solid var(--grey-20);
        padding-left: 10px;

        :focus {
          outline-color: var(--color-primary);
        }
      }

      button {
        position: absolute;
        right: 5px;
        height: 40px;
        background-color: var(--color-primary);
        color: var(--color-white);
        padding: 11px 20px;
        border: none;
        border-radius: var(--radius-default);

        :hover {
          background-color: var(--color-primary-50);
        }
      }
    }
  }

  @media (min-width: 768px) {
    height: 80px;
    display: flex;

    .container__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 0;
      width: 97%;
      margin: 0 auto;

      form {
        max-width: 365px;
      }
    }
  }

   @media (min-width: 1024px) {
    .container__header {
      width: 900px;
    }
  }
  
  @media (min-width: 1440px) {
    .container__header {
      width: 1200px;
    }
  } 
`;
