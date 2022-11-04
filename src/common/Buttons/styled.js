import styled, { css } from "styled-components";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { Check2 } from "@styled-icons/bootstrap/Check2";

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.colorPrimary};
    background-color: transparent;
    border: none;
    padding: 5px;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
            color: ${({ theme }) => theme.colors.colorSeconadry};
            cursor: auto;
        }

    ${({ complete }) => complete && css`
        transition: .7s;

        &:hover {
            color: ${({ theme }) => theme.colors.backgroundPrimary};
            background-color: ${({ theme }) => theme.colors.buttonMarkAsDone};
            border-radius: 15px;
        }
    `}

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.colors.buttonMarkAsDone};
        color: ${({ theme }) => theme.colors.backgroundPrimary};
        border-radius: 15px;

        &:hover {
            filter: brightness(110%);
        }
    `}

    ${({ remove }) => remove && css`
        transition: 1s;

        &:hover {
            background-color: ${({ theme }) => theme.colors.buttonDelete};
            color: ${({ theme }) => theme.colors.backgroundPrimary};
            border-radius: 15px;
        }

        &:active {
            color: ${({ theme }) => theme.colors.colorPrimary};
        }
    `}

    ${({ standard }) => standard && css`
        color: ${({ theme }) => theme.colors.buttonPrimary};
        transition: 1s;
        min-width: 127px;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            color: ${({ theme }) => theme.colors.colorPrimary};
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.colorPrimary};
            cursor: not-allowed;
        }
    `}

    ${({ hideDone }) => hideDone && css`
        min-width: 127px;
        padding: 5px;
        color: ${({ theme }) => theme.colors.buttonPrimary};
        transition: 1s;

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            color: ${({ theme }) => theme.colors.colorPrimary};
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.colorPrimary};
            cursor: not-allowed;
        }
    `}

    ${({ form }) => form && css`
        background-color: ${({ theme }) => theme.colors.buttonPrimary};
        color: ${({ theme }) => theme.colors.backgroundPrimary};
        border: none;
        min-width: fit-content;
        padding: 10px;
        transition: 1s;

        &:hover {
            cursor: pointer;
            transform: scale(1.08);
            filter: brightness(110%);
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            flex-grow: 1;
        }
    `}
`;

export const StyledButtonSection = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        ${({ search }) => search && css`
        flex-direction: row;
    `}
    };
`;

export const DeleteIcon = styled(Delete)`
    width: 20px;
`;

export const CheckIcon = styled(Check2)`
    width: 20px;
`;