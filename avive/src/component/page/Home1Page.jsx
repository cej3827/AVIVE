import React from "react";
import MenuNav from "../ui/MenuNav";
import styled from "styled-components";
import SearchBar from "../ui/Header/SearchBar";

const LogoStyle = styled.h1`
  /* LOGO */

  position: absolute;
  width: 248px;
  height: 91px;
  left: 43%;
  top: 30%;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 75px;
  line-height: 140px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #111154;
`;

// const SearchBarStyle = styled(SearchBar)`
//   /* Group 174 */

//   position: absolute;
//   width: 751px;
//   height: 43px;
//   left: 265px;
//   top: 416px;

// `;

function Home1(){
  return (
    <div>
      {/* HeaderMenu */}
      <div>
        <MenuNav/>
      </div>

      {/* Logo & SearchBar */}
      <div>
        <LogoStyle>AVIVE</LogoStyle>
      </div>
      
      <div style={{marginLeft:'400px', marginTop:'430px', marginRight:'auto'}}>
        <SearchBar/>
      </div>

    </div>
  );
}

export default Home1;