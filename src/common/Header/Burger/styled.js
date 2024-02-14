import styled from "styled-components";

export const StyledBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 2;

    &:focus {
        outline: none;
    }

    div {
        width: 32px;
        height: 4px;
        background: ${({ theme }) => theme.colors.buttonPrimary};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        &:first-of-type {
            transform: ${({ active }) => active ? "rotate(45deg)" : "rotate(0)"};
        }

        &:nth-of-type(2) {
            opacity: ${({ active }) => active ? "0" : "1"};
            transform: ${({ active }) => active ? "translateX(20px)" : "translateX(0)"};
        }

        &:nth-of-type(3) {
            transform: ${({ active }) => active ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`;