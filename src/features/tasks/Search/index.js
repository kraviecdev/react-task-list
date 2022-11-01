import { useHistory, useLocation } from "react-router-dom";
import { StyledInput } from "../Form/styled";

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
        <StyledInput
            placeholder="Filter tasks"
            value={query || ""}
            onChange={onInputChange}
        />
    )

}

export default Search;