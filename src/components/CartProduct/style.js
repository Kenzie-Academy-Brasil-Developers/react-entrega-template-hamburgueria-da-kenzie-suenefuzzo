import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  height: 80px;
  width: 100%;
  gap: 0.625rem;
  padding: 20px 18px;

  img {
    width: 70px;
    height: 70px;
    background-color: var(--grey-20);
    border-radius: var(--radius-secondary);
  }

  .container__itemInfoAndButton {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .container__itemInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-100);
    }

    small {
      font-size: var(--font-size-6);
      font-weight: var(--font-weight-4);
      color: var(--grey-50);
    }
  }
`;
