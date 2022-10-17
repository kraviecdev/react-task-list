import styled from "styled-components"

export const StyledImg = styled.img`
    max-height: 300px;
    border-radius: 50% 0;
    filter: drop-shadow(10px 2px 6px gray);
`;

export const StyledAuthorInfo = styled.span`
    padding: 5px 10px;
    line-height: 28px;

    @keyframes bounceInDown {
        0% {
            opacity: 0;
            transform: translate3d(0, -3000px, 0);
        }
        60% {
            opacity: 1;
            transform: translate3d(0, 25px, 0);
        }
        75% {
            transform: translate3d(0, -10px, 0);
        }
        90% {
            transform: translate3d(0, 5px, 0);
        }
        100% {
            transform: none;
        }
    };

    animation: bounceInDown 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000);
`;