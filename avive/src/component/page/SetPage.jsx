import React, {useState, useRef} from "react";
import styled from "styled-components";
import Header from "../ui/Header/Header";

import { IoPersonCircle } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FaUserLock } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";


const ProfileIcon = styled(IoPersonCircle)`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  display: block;
  margin: auto;
  color: #111154;
`;

const PencilIcon = styled(HiPencil)`
  width: 25px;
  height: 25px;

  position: absolute;
  left: 54%;
  right: 41.95%;
  top: 53.61%;
  bottom: 43.39%;

`;

const TextStyle = styled.span`
  font-size: 30px;
  color: #111154;
  font-family: 'Jockey One';
  white-space: nowrap;
`;

const LockPerson = styled(FaUserLock)`
  width: 35px;
  height: 35px;
  color: #111154;
  white-space: nowrap;
`;

const BellIcon = styled(FaRegBell)`
  width: 35px;
  height: 35px;
  color: #111154;
  white-space: nowrap;
`;

const Name = styled.div`
/* ckthdud */

position: absolute;
width: 293px;
height: 42px;
left: 780px;
top: 437px;

font-family: 'Jockey One';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 56px;
display: flex;
align-items: center;
text-align: center;

color: #000000;


`;

export default function Set() {

  return (
    <div>
      {/* header */}
      <div style={{position:'fixed', display:'block', zIndex:'100', top:0, width:'100%', background:'#ffffff'}}>
        <Header />
        <p style={{textAlign:'center', color:'gray', fontSize:'25px', marginTop:'70px'}}>setting</p>
      </div>

      {/* contents 1 */}
      <div style={{display:'grid',alignItems:'center' ,marginTop:'170px'}}>
        <ProfileIcon/> {/* 클릭 시 모달창 오픈 */}
        <div>
          <Name>ckthdud</Name>
          <PencilIcon />
        </div>
      </div>

      {/* contents 2 */}
      <div style={{position:'absolute', width: '524px', height: '141.15px',left: '570px',top: '579px'}}>
        <div style={{display:'block', gap:'1rem'}}>
          <LockPerson/>
          <TextStyle>personal information</TextStyle>
        </div>

        <div style={{display:'block', gap:'1rem'}}>
          <BellIcon/>
          <TextStyle>notification</TextStyle>
        </div>
      </div>

    </div>
  );
}