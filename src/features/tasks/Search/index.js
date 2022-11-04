import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { StyledForm, StyledInput } from "../Form/styled";
import { StyledButton, StyledButtonSection } from "../../../common/Buttons/styled";
import { SearchIcon, StyledInputWrapper } from "./styled";

const Search = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("search");
    const searchParams = new URLSearchParams(location.search);
    const history = useHistory();
    const [searchValue, setSearchValue] = useState(query)

    const onInputChange = () => {
        searchParams.set("search", searchValue);
        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    const onSearchSubmit = () => {
        if (searchValue === "") {
            return;
        };
        onInputChange();
    };

    const onClickClear = () => {
        setSearchValue("");
        searchParams.delete("search");
        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <StyledForm onSubmit={onSearchSubmit}>
            <StyledInputWrapper>
                <StyledInput
                    search
                    placeholder="Filter tasks"
                    value={searchValue}
                    onChange={({ target }) => setSearchValue(target.value)}
                />
                <SearchIcon />
            </StyledInputWrapper>
            <StyledButtonSection search>
                <StyledButton form>Search</StyledButton>
                <StyledButton
                    form
                    onClick={onClickClear}
                >
                    Clear
                </StyledButton>
            </StyledButtonSection>
        </StyledForm>
    )

}

export default Search;