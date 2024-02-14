import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${({ inner }) => inner ? `16px` : `24px 0`};
    margin: 0 auto;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        padding: ${({ inner }) => inner ? `10px` : `24px 10px`};
    }
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100dvh;
    padding: 20px;
    top: 80px;
    left: 0;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    transition: 0.4s ease-in-out;

    transform: ${({ active }) => active ? "translateX(0)" : "translateX(100%)"};
`;