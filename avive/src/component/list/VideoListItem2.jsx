import React from "react";
import styled from "styled-components";

const DivStyle=styled.div`
  padding:0;
  margin:0;
  display: flex;
  flex-direction: row;
`;

const Thumnail = styled.img`
  width: 350px;
  height: 200px;
  margin-top: 10;
  border-radius: 20%;
  float: left;
`;

const Profile = styled.img`
  margin-top: 5;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
`;

const VideoInfo = styled.p`
  margin-left: 50px;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 20px;
  text-align: left;
`;


function Video(props) {
  return (
    <DivStyle>
      <div style={{display:'block', flexDirection: "column", marginBottom:"1rem", padding:"0 2rem"}}>
        <div style={{marginRight:"1rem"}}>
          <Thumnail src="https://i.ytimg.com/vi/hdKQohqoR50/mqdefault.jpg" />
        </div>
            
        <div style={{fontSize:'20'}}>
          <Profile src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
          <VideoInfo>{props.title}</VideoInfo>
          <VideoInfo>{props.nickname}</VideoInfo>
          <VideoInfo style={{color:'gray'}}>2.3K views / 1 hours ago</VideoInfo>
        </div>
      </div>
    </DivStyle>
  );
}

export default Video;