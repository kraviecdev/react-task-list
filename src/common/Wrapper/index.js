import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${({column}) => column ? "column" : "row"};
    gap: 12px;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;
    margin: 0 auto;
    padding: ${({inner}) => inner ? `10px 0` : `12px`};
`;