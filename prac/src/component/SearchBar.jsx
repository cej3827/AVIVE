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
    return (
        <SearchContainer>
            <Search/>
            <HiSearch color="#ffffff" size="28"/>
        </SearchContainer>
    );
}

export default SearchBar;