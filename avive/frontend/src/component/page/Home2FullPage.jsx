import React from "react";
import Header2 from "../ui/Header/Header2";
import SubsChannelList from "../list/SubsChannelList";
import VideoList from "../list/VideoList2";
import styled from "styled-components";
import VideoList2 from "../list/VideoList2";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`

  width: 100%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
  /* margin-top:120px;
  margin-left:70px; */

  body{
    -ms-overflow-style: none;
  }
 
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubscrbieChannelListStyle = styled.div`
  position: absolute;
  width: 90%;
  height: 170px;
  top: 120px;
  overflow-x: scroll;
`;

const VideoListStyle = styled.div`
  position:absolute;
  width: 90%;
  height: auto;
  top: 300px;
  overflow-y: scroll;
`;

const Line = styled.hr`
  border: solid 0.5px;
  width: 100%;
  margin-top: 3%;
  align-items: center;
  color: #D6D6D6;
`

const Back = styled(IoIosArrowBack)`
  /* Vector */

  position: fixed;
  width: 25px;
  height: 25px;

  left: 5%;
  right: auto;
  top: 3.75%;
  border-radius: 1.5px;
  color: #111154;
  z-index: 9999;
  cursor: pointer;
  
`

function Home2Full(){

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); //뒤로가기
  };

  return (
    <Wrapper>
      <Back onClick={handleBack}/>
      <Header2/>

      <SubscrbieChannelListStyle>
        <SubsChannelList/>
        <Line/>
      </SubscrbieChannelListStyle>

      <VideoListStyle>
        <VideoList2/>
      </VideoListStyle>
    </Wrapper>
  );
}

export default Home2Full;