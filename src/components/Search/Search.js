import { useEffect, useState } from "react";
import debounce from "../../utils/debounce";
import SearchSuggest from "../SearchSuggest/SearchSuggest";
import "./Search.css";

const fetchSuggestions = debounce(async (query, setSuggestions) => {
  if (query.length === 0) {
    setSuggestions([]);
    return;
  }

  const response = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=10`
  );

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();

    data &&
      setSuggestions(
        data.items.filter(({ login }) =>
          login.includes(query.replaceAll(/\s/g, ""))
        )
      );
  } else {
    console.error("Error. Couldn't fetch data");
  }
}, 300);

function Search() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchSuggestions(query, setSuggestions);
  }, [query]);

  return (
    <div className="search">
      <input
        className="searchbar"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
      />
      <div className="suggestions">
        {suggestions &&
          suggestions.map(({ login, avatar_url, node_id }) => (
            <SearchSuggest key={node_id} username={login} avatar={avatar_url} />
          ))}
      </div>
    </div>
  );
}

export default Search;
