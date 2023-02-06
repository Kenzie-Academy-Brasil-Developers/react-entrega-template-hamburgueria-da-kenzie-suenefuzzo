import styled from "styled-components";

export const StyledCartProduct = styled.li`
    display: flex;
    height: 80px;
    width: 100%;
    gap: 0.625rem;

    img{
        width: 70px;
        height: 70px;
        background-color: var(--grey-20);
        border-radius: var(--radius-secondary);
    }

    div{
        display: flex;
    }
`