import styled, { css } from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";
import { Check2 } from "@styled-icons/bootstrap/Check2";

export const Button = styled.button`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    background-color: transparent;
    border: none;
    padding: 12px 0;
    transition: .7s;

    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }

    &:active {
        color: ${({ theme }) => theme.colors.colorPrimary};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.colorPrimary};
        cursor: not-allowed;
    }

    ${({ complete }) => complete && css`
        padding: 5px;

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
    `}

    ${({ remove }) => remove && css`
        padding: 5px;

        &:hover {
            background-color: ${({ theme }) => theme.colors.buttonDelete};
            color: ${({ theme }) => theme.colors.backgroundPrimary};
            border-radius: 15px;
        }

        &:active {
            color: ${({ theme }) => theme.colors.colorPrimary};
        }
    `}

    ${({ form }) => form && css`
        min-width: 128px;
        background-color: ${({ theme }) => theme.colors.buttonPrimary};
        color: ${({ theme }) => theme.colors.backgroundPrimary};
        border: none;
        padding: 12px;
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

export const DeleteIcon = styled(Trash)`
    width: 20px;
`;

export const CheckIcon = styled(Check2)`
    width: 20px;
`;