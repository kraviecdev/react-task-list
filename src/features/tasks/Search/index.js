import { useHistory, useLocation } from "react-router-dom";
import { StyledInput } from "../Form/styled";
import { StyledButton } from "../../../common/Buttons/styled";
import { StyledSearchWrapper, SearchIcon, StyledInputWrapper } from "./styled";

const Search = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("search");
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("search");
        } else {
            searchParams.set("search", target.value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }

    return (
        <StyledSearchWrapper>
            <StyledInputWrapper>
                <StyledInput
                    search
                    placeholder="Filter tasks"
                    value={query || ""}
                    onChange={onInputChange}
                />
                <SearchIcon />
            </StyledInputWrapper>
            <StyledButton form>Search</StyledButton>
        </StyledSearchWrapper>
    )

}

export default Search;