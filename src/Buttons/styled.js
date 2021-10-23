import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }

    ${({ complete }) => complete && css`
        transition: 1s;

        &:hover {
            color: ${({ theme }) => theme.color.white};
            background-color: ${({ theme }) => theme.color.green};
            border-radius: 15px;
        }
    `}

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.white};
        border-radius: 15px;

        &:hover {
            filter: brightness(110%);
        }
    `}

    ${({ remove }) => remove && css`
        transition: 1s;

        &:hover {
            background-color: ${({ theme }) => theme.color.red};
            color: ${({ theme }) => theme.color.white};
            border-radius: 15px;
        }

        &:active {
            color: ${({ theme }) => theme.color.black};
        }
    `}

    ${({ selectAll }) => selectAll && css`
        padding: 5px;
        color: ${({ theme }) => theme.color.teal};
        transition: 1s;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            color: ${({ theme }) => theme.color.black};
        }

        &:disabled {
            color: ${({ theme }) => theme.color.grey};
            cursor: auto;
        }
    `}

    ${({ hideDone }) => hideDone && css`
        min-width: 127px;
        padding: 5px;
        color: ${({ theme }) => theme.color.teal};
        transition: 1s;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            color: ${({ theme }) => theme.color.black};
        }

        &:disabled {
            color: ${({ theme }) => theme.color.grey};
            cursor: auto;
        }
    `}

    ${({ form }) => form && css`
        background-color: ${({ theme }) => theme.color.teal};
        color: ${({ theme }) => theme.color.white};
        border: none;
        min-width: fit-content;
        padding: 10px;
        transition: 1s;

        &:hover {
            cursor: pointer;
            transform: scale(1.08);
            filter: brightness(110%);
        }
    `}
`;

export const StyledButtonSection = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
`;