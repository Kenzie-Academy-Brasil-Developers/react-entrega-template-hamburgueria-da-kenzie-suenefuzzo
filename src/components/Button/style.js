import styled from "styled-components";

export const StyledDefaultButton = styled.button`
  height: 40px;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--radius-default);
  color: var(--color-white);
  padding: 11.5px 20px;

  :hover {
    background-color: var(--color-primary-50);
  }
`;

export const StyledGreyButton = styled(StyledDefaultButton)`
  background-color: var(--grey-20);
  color: var(--grey-50);

  :hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
  }
`;

export const StyledRemoveButton = styled(StyledDefaultButton)`
  background-color: var(--grey-0);
  color: #bdbdbd;
  padding: 5px;
  border: 1px solid transparent;


  :hover {
    background-color: var(--grey-0);
    border: 1px solid #bdbdbd;
  }
`;
