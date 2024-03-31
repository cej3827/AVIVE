import React from 'react';
import styled from 'styled-components';
import './header.css';
import { IoVideocam } from "react-icons/io5";
import { HiBellAlert } from "react-icons/hi2";
import { GoPersonFill } from "react-icons/go";
import SearchBar from './SearchBar';


const VideoIcon = styled(IoVideocam)`
  color:"#111154";
  position: absolute;
  width: 43px;
  height: 62px;
  left: 2000px;
  top: 55px;
`;

const NoticeIcon = styled(HiBellAlert)`
  color:"#111154";
  position: absolute;
  width: 43px;
  height: 62px;
  left: 2080px;
  top: 55px;
`;

const ProfileIcon = styled(GoPersonFill)`
  color:"#111154";
  position: absolute;
  width: 43px;
  height: 62px;
  left: 2160px;
  top: 55px;
`;

function Header(props) {
  return (
    // <nav className="a">
    //   <div className="b">
    //     <div className="c">
    //       <button className="d">

    //       </button>
    //         <a className="e" style={{left: '1000px'}}>AVIVE</a>
    //     </div>
    //     <div className="f">
    //       <li><a><VideoIcon/></a></li>
    //       <li><a><NoticeIcon/></a></li>
    //       <li><a><ProfileIcon/></a></li>
    //     </div>
    //   </div>
    // </nav>


    <div style={{position:'fixed',top:'0px',width:'100%'}}>
      <header>
        <link rel='stylesheet' href='header.css'/>
      </header>
      <body>
        <h1>AVIVE</h1> <br/>
        <VideoIcon/>
        <NoticeIcon/>
        <ProfileIcon/> <br/>
        <div style={{marginTop:'100px', marginLeft:'630px'}}>
          <SearchBar/>
        </div>
      </body>
    </div>
  );
}

export default Header; //다른 JS파일에서 불러올 수 있도록 내보내주기