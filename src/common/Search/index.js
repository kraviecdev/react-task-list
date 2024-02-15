import { useSearchParams } from "react-router-dom";
import { Form, Input } from "../Form";
import { Wrapper } from "../Wrapper";
import { SearchIcon } from "./styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  const onInputChange = (e) => {
    const query = e.target.value;

    if (query.length === 0) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      searchParams.set("search", query);
      setSearchParams(searchParams);
    }
  };

  console.log(searchParams);

  return (
    <Form>
      <Wrapper search>
        <Input
          placeholder="Filter tasks"
          value={searchParam || ""}
          onChange={onInputChange}
        />
        <SearchIcon />
      </Wrapper>
    </Form>
  );

};

export default Search;