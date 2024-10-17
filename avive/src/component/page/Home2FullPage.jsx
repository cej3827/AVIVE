import React from "react";
import Header2 from "../ui/Header/Header2";
import SubsChannelList from "../list/SubsChannelList";
import VideoList from "../list/VideoList";
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