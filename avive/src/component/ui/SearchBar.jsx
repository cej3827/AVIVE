import React from 'react';
import styled from 'styled-components';
import { HiSearch } from "react-icons/hi";

const SearchContainer = styled.div`
  // position: absolute;
  width: 1036px;
  // width: 72%;
  height: 35px;
  // height: 5%;
  left: 180px;
  position: fixed;
  // transform: translateX(-50%);
  top: 90px;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111154;
  border-radius: 76px;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 944px;
  height: 24px;
  left: 7px;
  top: 6px;
  background: #FFFFFF;
  border-radius: 76px;
  border: none;
  padding: 0 20px;
`;

const SearchButton = styled(HiSearch)`
  color: #fff;
  position: absolute;
  width: 30px;
  height: 17.56px;
  left: calc(100% - 45px);
  top: 9px;
`;

function SearchBar(props) {
  const { value, onChange } = props;

  return (
    <SearchContainer value={value} onChange={onChange}>
      <Rectangle3 />
      <SearchInput type="text" placeholder="" />
      <SearchButton />
    </SearchContainer>
  );
};

export default SearchBar;
