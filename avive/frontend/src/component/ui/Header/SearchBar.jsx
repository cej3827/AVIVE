import React, {useState} from "react";
import axios from 'axios';
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const SearchContainer = styled.div`
  width: 856px;
  height: 28px;
  position: absolute;
  border-radius: 20px;
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
    background-color: #ffffff;
    width: 800px;
    height: 20px;
    outline: none;
    padding: auto ;
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
      // searchbar outer with search icon
      <SearchContainer onSubmit={handleSearch} >

        {/* input */}
        <form>
          <Search 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=" Let's Search ...!"
          />
          {/* search icon */}
          <HiSearch color="#ffffff" size="28" type="submit" style={{padding:'auto 30% auto 70%'}}/>
        </form>

        {/* elasticsearch mapping */}
        <div>
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