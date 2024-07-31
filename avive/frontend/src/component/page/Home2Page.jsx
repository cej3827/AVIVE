import React from "react";
import styled from "styled-components";
import Header from "../ui/Header/Header";
import VideoList2 from "../list/VideoList2";
import VideoList3 from "../list/VideoList3";
import CategoryList from "../list/CategoryList"
import SearchBar from "../ui/Header/SearchBar";
import { useNavigate } from "react-router-dom";

const SubscribeStyle = styled.div`
  margin-top:120px;
  margin-left:70px;
`;

const SubscrbieVideoList = styled.div`
  position: absolute;
  width: 1550px;
  height: 400px;
  top: 180px;
  padding-top: 30px;
  overflow-x: scroll;
`;

const RecommendedStyle = styled.div`
  margin-top: 400px;
  margin-left:70px;
`;

const RecommendedVideoList = styled.div`
    position: absolute;
    width:1550px;
    overflow-y: scroll;
    flex-direction: column-reverse;
`;

const Subtitle = styled.div`
   font-size: 30px;
   text-align: left;
   margin-left: 30px;
   margin-top: 35px;
   bottom: 0;
   display: inline-block;
   white-space: nowrap;
   overflow: hidden;
   float: left;
 `;

 const ViewAllBtn = styled.button`
   float: right;
   font-size: 20px;
   text-align: right;
   padding-top: 65px;
   background-color: white;
   border: none;
 `;

 function Home2(){
  const navigate = useNavigate();

  const onClickToFull = () => {
    navigate('/Home2Full');
  };

   return(
     <div style={{display:'flex', height: '100vh', flexDirection:'column'}}>
        <div style={{position:'fixed', display:'block', zIndex:'100', top:'0', width:'100%', background:'#ffffff'}}>
          <Header/>
        </div>

        <SubscribeStyle>
          <div>
            <Subtitle>Subscribe</Subtitle>
            <ViewAllBtn onClick={onClickToFull}>+ view all</ViewAllBtn>
          </div>

          <div style={{paddingTop:'70px'}}>
            <SubscrbieVideoList>
              <VideoList2/>
            </SubscrbieVideoList>
          </div>
        </SubscribeStyle>

        <br/><hr/>

        <RecommendedStyle>
          <CategoryList style={{float:'left'}}/>
          <RecommendedVideoList>
            <VideoList3/>
          </RecommendedVideoList>
        </RecommendedStyle>

     </div>
   );
 }

 export default Home2;

