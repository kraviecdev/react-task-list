import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 15px;
    display: flex;
    gap: 10px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    width: 100%;
    border: 2px solid hsl(0, 0%, 90%);
`;