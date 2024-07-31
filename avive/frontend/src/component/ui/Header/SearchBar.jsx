import React, {useState} from "react";
import axios from 'axios';
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const SearchContainer = styled.div`
  width: 856px;
  height: 28px;
  position: relative;
  border-radius: 20px;
  margin: 2px;
  background-color: #111154;

  svg {
    position: absolute;
    right: 20px;
  }

  input {
    margin: 3px 0 0 3px;
  }
`;

const Search = styled.input`
    border-radius: 20px;
    border: 0;
    background-color: white;
    width: 92%;
    height: 70%;
    outline: none;
`;

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/search', { query });
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <SearchContainer onSubmit={handleSearch}>
        <form>
          {/* input */}
          <Search 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=" Let's Search ...!"
          />
          {/* search button */}
          <HiSearch color="#ffffff" size="28" type="submit"/>
        </form>
        <div>
          {/* elasticsearch mapping */}
          {results.map((result, index) => (
              <div key={index}>
                <h2>{result._source.title}</h2>
                <p>{result._source.content}</p>
              </div>
            ))}
        </div>
      </SearchContainer >
    );
}

export default SearchBar;