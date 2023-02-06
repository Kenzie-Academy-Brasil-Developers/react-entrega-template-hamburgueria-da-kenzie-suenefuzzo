import styled from "styled-components";

export const StyledCartTotal = styled.div`
  padding: 0 18px;
  padding-bottom: 20px;
  margin-top: 25px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;

  .container__total {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
    border-top: 2px solid var(--grey-20);
    padding-top: 20px;

    .title{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        color: var(--grey-100);
    }

    .price{
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        color: var(--grey-50);
    }
  }

  button {
    width: 100%;
  }
`;
