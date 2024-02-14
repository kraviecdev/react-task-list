import styled from "styled-components";

export const Form = styled.form`
    padding: 16px;
    display: flex;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    width: 100%;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border: none;
`;