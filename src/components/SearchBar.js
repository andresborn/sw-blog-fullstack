import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";

const SearchBar = () => {
    const { store } = useContext(Context);

    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setInput(e.target.value);
        if (input.length === 0) setSuggestions([]);
        const regex = new RegExp(`^${input}`, "gi");
        const allItems = store.planets.concat(store.people);
        const sug = allItems.filter((item) => item.name.match(regex));
        setSuggestions([...sug]);
        console.log(suggestions);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className="d-flex flex-column">
            <input
                className="form-control dropdown-toggle search-bar"
                data-toggle="dropdown"
                aria-haspopup="true"
                type="search"
                onChange={(e) => onChange(e)}
                value={input}
                placeholder="Search"
            />
            <ul
                style={{ left: "auto" }}
                className="search-bar list dropdown-menu"
            >
                {suggestions.map((each, i) => (
                    <li
                        key={i}
                        className="dropdown-item search-bar"
                        onClick={(e) => setInput("")}
                    >
                        <Link style={{color: "black"}}
                            to={`/sw-blog-fullstack/${
                                each.climate ? "planet" : "person"
                            }/${each.id}`}
                        >
                            {each.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default SearchBar;
