import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 8.688rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.197rem;

  background-color: var(--grey-0);

  img {
    width: 9.375rem;
  }

  form {
    height: 3.75rem;
    background-color: #ffffff;
    border-radius: var(--radius-default);
    border: 2px solid var(--grey-20);
    padding: 10px;


    input {
      height: 100%;
      border: none;
      background-color: var();

      :focus {
        outline: none;
      }
    }
  }
`;
