import React from 'react';
import styled from "styled-components";
import { GoBellFill } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const VideoIcon = styled(IoIosVideocam)`
  color:"#111154";
  position: absolute;
  width: 30px;
  height: 45px;
  margin-left: 1450px;
  margin-top: 10px;
`;

const BellIcon = styled(GoBellFill)`
  color:"#111154";
  position: absolute;
  width: 30px;
  height: 45px;
  margin-left: 1500px;
  margin-top: 10px;
`;

const ProfileIcon = styled(IoPerson)`
  color:"#111154";
  position: absolute;
  width: 30px;
  height: 40px;
  margin-left: 1550px;
  margin-top: 10px;
`;

function MenuNav(props) {
  return (
    <div style={{position:'fixed',top:'0px',width:'100%',height:'100%'}} role='banner'>
      <header>
        <link rel='stylesheet' href='header.css'/>
        <div style={{display:'flex', flexDirection:'row'}}>
          <VideoIcon/>
          <BellIcon/>
          <ProfileIcon/>
        </div>
      </header>
    </div>
  );
}

export default MenuNav; //다른 JS파일에서 불러올 수 있도록 내보내주기