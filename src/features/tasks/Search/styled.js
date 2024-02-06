import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

export const StyledSearchWrapper = styled.div`
    display: flex;
    gap: 10px;
    padding: 15px;
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    border: 2px solid ${({ theme }) => theme.colors.backgroundAddPrimary};
    background: ${({ theme }) => theme.colors.backgroundAddPrimary};
`;

export const SearchIcon = styled(Search)`
    width: 24px;
    margin: 10px;
`;