import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${({ column }) => column ? "column" : "row"};
    gap: 12px;
    width: ${({ inner }) => inner ? "max-content" : "100%"};
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;
    margin: ${({ inner }) => inner ? "0" : "0 auto"};
    flex-wrap: ${({ wrap }) => wrap ? "wrap" : "nowrap"};

    img {
        max-height: 350px;
        border-radius: 50% 0;
        filter: drop-shadow(10px 2px 6px gray);

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            max-height: 150px;
            border-radius: 50%;
        }
    }

    ${({ search }) => search && css`
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    `}
`;