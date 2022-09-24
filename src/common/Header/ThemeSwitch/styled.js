import styled, { css } from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    color: inherit;
    padding: 0px;
`;

export const Info = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 1.3;
  margin: 0px 12px 0px 0px;
  text-transform: uppercase;
  display: none;

  @media(min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: block;
  }
`;

export const SwitchBody = styled.span`
  width: 47px;
  padding: 2.5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px solid;
  transition: background .3s;
`;

export const IconBody = styled.span`
  background: ${({ theme }) => theme.colors.buttonPrimary};  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: transform .3s, background .3s;
  
  ${({ active }) => active && css`
    transform: translateX(20px);
  `}
`;