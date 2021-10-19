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
            color: hsl(0, 0%, 100%);
            background-color: hsl(120, 100%, 35%);
            border-radius: 15px;
        }
    `}

    ${({ done }) => done && css`
        background-color: hsl(120, 100%, 25%);
        color: hsl(0, 0%, 100%);
        border-radius: 15px;

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        transition: 1s;

        &:hover {
            background-color: hsl(0, 100%, 50%);
            color: white;
            border-radius: 15px;
        }

        &:active {
            color: hsl(0, 0%, 0%);
        }
    `}

    ${({ selectAll }) => selectAll && css`
        padding: 5px;
        color: hsl(180, 100%, 25%);
        transition: 1s;

        &:hover {
            color: hsl(180, 100%, 35%);
        }

        &:active {
            color: hsl(0, 0%, 0%);
        }

        &:disabled {
            color: hsl(0, 0%, 87%);
            cursor: auto;
        }
    `}

    ${({ hideDone }) => hideDone && css`
        min-width: 127px;
        padding: 5px;
        color: hsl(180, 100%, 25%);
        transition: 1s;

        &:hover {
            color: hsl(180, 100%, 35%);
        }

        &:disabled {
            color: hsl(0, 0%, 87%);
            cursor: auto;
        }
    `}

    ${({ form }) => form && css`
        background-color: hsl(180, 100%, 25%);
        color: white;
        border: none;
        min-width: fit-content;
        padding: 10px;
        transition: 1s;

        &:hover {
            cursor: pointer;
            transform: scale(1.08);
            background-color: hsl(180, 100%, 35%);
        }
    `}
`;

export const StyledButtonSection = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
`;