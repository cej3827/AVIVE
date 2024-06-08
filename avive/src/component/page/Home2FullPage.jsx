import React from "react";
import Header2 from "../components/Header2";
import SubsChannelList from "../components/SubsChannelList";
import VideoList from "../components/VideoList";
import styled from "styled-components";

const Contents = styled.div`
  
`;

function Home2Full(){
  return (
    <div>
      <head>
        <title>AVIVE</title>
        <meta charset="utf-8"/>
      </head>
      <div style={{position:'fixed', display:'block', zIndex:'100', top:'0', width:'100%', background:'#ffffff'}}>
        <Header2/>
      </div>
      <div style={{position:'sticky',marginTop:'80px'}}>
        <div>
        <SubsChannelList/>
        </div>
      </div>
      <div>
          <VideoList/>
      </div>
    </div>
  );
}

export default Home2Full;