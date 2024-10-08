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
  font-weight: 2000;
  font-size: 75px;
  line-height: 140px;
  display: flex;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0px 10px #8c8cbc;
  color: #111154;
 
  /* position: absolute;
  width: 248px;
  height: 91px;
  left: 43%;
  top: 30%;

  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
  text-transform: uppercase;
  display: block;
  font-size: 92px;
  color: #ffffff;
  text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
  font-weight: bold;
  letter-spacing: -4px;
  text-align: center;
  background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
  transform: translate(-50%,-50%);
  border-radius: 20px; */
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
  color: #111154;
  border-radius: 20%;
  cursor: pointer;
`;

function Home1(){
  const navigate = useNavigate();

  const onClickUp = () => {
    navigate(`/Home2`);
  };

  return (
    <div>
      {/* HeaderMenu */}
      <div style={{margin:'0% 50% auto 50%'}}>
        <Header3/>
      </div>

      {/* Logo & SearchBar */}
      <div style={{margin:'20% 50% auto 20%', bottom:'0px'}}>
        <LogoStyle>avive</LogoStyle>
      </div>
      
      <div style={{top:'0px', margin:'25%'}}>
        <SearchBar/>
      </div>

      <DoubleUp onClick={onClickUp} style={{margin:'20% 50% 0% 50%'}}/>

    </div>
  );
}

export default Home1;