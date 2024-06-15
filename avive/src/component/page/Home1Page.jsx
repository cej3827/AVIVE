import React from "react";
import styled from "styled-components";
import SearchBar from "../ui/Header/SearchBar";
import Header3 from "../ui/Header/Header3";
import { CgChevronDoubleUp } from "react-icons/cg";
import { useNavigate } from "react-router-dom";



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

const DoubleUp = styled(CgChevronDoubleUp)`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 800px;
  top: 774px;

  color: #111154;
  border-radius: 20%;
`;

function Home1(){
  const navigate = useNavigate();

  const onClickUp = () => {
    navigate(`/Home2`);
  };

  return (
    <div>
      {/* HeaderMenu */}
      <div>
        <Header3/>
      </div>

      {/* Logo & SearchBar */}
      <div>
        <LogoStyle>AVIVE</LogoStyle>
      </div>
      
      <div style={{marginLeft:'400px', marginTop:'430px', marginRight:'auto'}}>
        <SearchBar/>
      </div>

      <DoubleUp onClick={onClickUp}/>

    </div>
  );
}

export default Home1;