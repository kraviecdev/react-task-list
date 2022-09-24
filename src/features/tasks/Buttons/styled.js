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
        padding: 5px;
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
            color: ${({ theme }) => theme.colors.colorSeconadry};
            cursor: auto;
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
            color: ${({ theme }) => theme.colors.colorSeconadry};
            cursor: auto;
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
    `}
`;

export const StyledButtonSection = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
`;