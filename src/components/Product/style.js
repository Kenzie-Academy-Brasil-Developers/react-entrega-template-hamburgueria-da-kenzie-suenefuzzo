import styled from "styled-components";

export const StyledProduct = styled.li`
    border: 2px solid var(--grey-20);
    border-radius: var(--radius-secondary);
    min-width: 18.75rem;
    height: 21.625rem;

    img{
        max-height: 40%;
        width: 100%;
        background-color: var(--grey-0);
    }

    div{
        padding: 20px 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2{
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-1);
            color: var(--grey-100);
        }

        span{
            font-size: var(--font-size-6);
            font-weight: var(--font-weight-4);
            color: var(--grey-50);
        }

        p{
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-2);
            color: var(--color-primary);
        }

        button{
            margin-top: 10px;
            align-self: flex-start;
        }
    }
`