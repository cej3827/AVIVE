import React from "react";
import Header2 from "../ui/Header/Header2";
import SubsChannelList from "../list/SubsChannelList";
import VideoList from "../list/VideoList2";
import styled from "styled-components";
import VideoList2 from "../list/VideoList2";

const Wrapper = styled.div`
  margin-top:120px;
  margin-left:70px;
`;

const SubscrbieChannelListStyle = styled.div`
  position: absolute;
  width: 1550px;
  height: 170px;
  top: 120px;
  overflow-x: scroll;
`;

const VideoListStyle = styled.div`
  position:absolute;
  width:1550px;
  height: auto;
  top: 300px;
  overflow-y: scroll;
`;

function Home2Full(){
  return (
    <div>
      <Header2/>
      <Wrapper>

        <SubscrbieChannelListStyle>
          <SubsChannelList/>
        </SubscrbieChannelListStyle>

        <VideoListStyle>
          <VideoList2/>
        </VideoListStyle>
      </Wrapper>
    </div>
  );
}

export default Home2Full;