import React from "react";
import UserInfo from "../ui/UserInfo";
import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import Comment from "../ui/Comment"
import UserCardList from "../list/UserCardList"
import VideoList from "../list/VideoList";
import Header from '../ui/Header/Header';
import data from '../../data.json';
import { useState } from "react";
import WatchPagePlayListModal from '../ui/WatchPagePlayListModal';

const Container = styled.div`
    display: grid;
    width: 70%;
    margin: 0 auto;
    padding-top: 20px;
`;

const VideoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
`;

const VideoScreen = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
`;

const CommentBox = styled.div`
    padding-top: 36px;
    width: 30%;
    height: 100%;
    margin: 0 auto;
`;

const WatchVideo = styled.div`
    width: 98%;
    height: 90%;
    background-color: black;
`;

const Contents = styled.div`
    display: grid;
    background-color: white;
    margin: 5px;
    align-content: start;

    span {
        margin-left: 5px;
        margin-right: 10px;
    }
`;

const VideoInfo = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding-top: 5px;
    justify-content: space-between;
`;

const VideoIcon = styled.div`
    display: flex;
    width: 12%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
`;

const VideoName = styled.span`
    color: black;
    font-size: 16px;
    font-weight: bold;
`;

const VideoInfo1 = styled.span`
    color: grey;
    font-size: 12px;
`;

const VideoContents = styled.div`
    height: 23px;
    margin: 1px;
    border-radius: 10px;
    background-color: lightgrey;
`;

const VideoContents1 = styled.div`
    height: 40px;
    margin: 1px;
    border-radius: 10px;
    background-color: lightgrey;
`;

const HashTag = styled.div`
    color: blue;
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 20px;
`;

const Border = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 10px 0 20px 0;
`;


function WatchPage(props) {
    const {} = props;
    const navigate = useNavigate();
    const { videoId } = useParams();
    const [videoInfoId, setvideoInfoId] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    
    const video = data.find((item) => {
        return item.id == videoId;
    });

    const openModal = () => {
        setModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setModalOpen(false); // 모달 닫기
    };

    const comment = video ? (video.id) : '0' ;

    const handleVideoInfoChecked = () => {
        if(videoInfoId == 0){
            return(
                <VideoContents
                    onClick={()=>{
                        setvideoInfoId(1);
                    }}>
                    Hello ...
                </VideoContents>
            )}
        else if(videoInfoId ==1){
            return(
                <VideoContents1
                    onClick={()=>{
                        setvideoInfoId(0);
                    }}>
                    {"Hello world"+"\n"+"My world very good girl"}
                </VideoContents1>
            );
        }
    }

    return (
        <div>
            <Header/>
            <main>
                <section style={{paddingTop:"150px"}}></section>
                    <Container>
                        <VideoContainer>
                            <VideoScreen>
                                <UserInfo/>
                                <WatchVideo/>
                            </VideoScreen>
                            <CommentBox>
                                <Comment comment={comment}/>
                            </CommentBox>
                        </VideoContainer>
                        <VideoInfo>
                            <Contents>
                                <VideoName>
                                    {video ? (video.title): "동영상 제목"}</VideoName>
                                <VideoInfo1>비디오 views 비디오 업로드 날짜</VideoInfo1>
                            </Contents>
                            <VideoIcon>
                                <AiFillLike size={30}/>
                                <AiFillDislike size={30}/>
                                <IoMdShare size={30}/>
                                <MdSaveAlt
                                    onClick={openModal}
                                    size={30}/>
                                    {modalOpen && <WatchPagePlayListModal closeModal={closeModal}/>}
                            </VideoIcon>
                        </VideoInfo>
                        {handleVideoInfoChecked()}
                        <HashTag>#vlog #감성 #먹방</HashTag>
                        <VideoName>Recommendation channel</VideoName>
                        <UserCardList/>
                        <Border/>
                        <VideoList 
                            videos={data}
                        ></VideoList>
                    </Container>
            </main>
        </div>
    );
}

export default WatchPage;