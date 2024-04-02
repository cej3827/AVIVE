import React from "react";
import UserInfo from "../ui/UserInfo";
import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import CommentListItem from "../list/CommentListItem";
import UserCardList from "../list/UserCardList";
import VideoList from "../list/VideoList";
import Header from '../ui/Header/Header';

const videos = [
    {
        id: 1,
        videouploder: "신혜혜",
        videoname: "동영상"
    },
    {
        id: 2,
        videouploder: "차차소", 
        videoname: "동영상"
    },
    {
        id: 3,
        videouploder: "최최은진진자라",
        videoname: "동영상"
    },
];

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

    const video = videos.find((item) => {
        return item.id == videoId;
    });

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
                                <CommentListItem/>
                            </CommentBox>
                        </VideoContainer>
                        <VideoInfo>
                            <Contents>
                                <VideoName>
                                    {video ? (video.videoname): "동영상 제목"}</VideoName>
                                <VideoInfo1>비디오 views 비디오 업로드 날짜</VideoInfo1>
                            </Contents>
                            <VideoIcon>
                                <AiFillLike size={30}/>
                                <AiFillDislike size={30}/>
                                <IoMdShare size={30}/>
                                <MdSaveAlt size={30}/>
                            </VideoIcon>
                        </VideoInfo>
                        <VideoContents></VideoContents>
                        <HashTag>#vlog #감성 #먹방</HashTag>
                        <VideoName>Recommendation channel</VideoName>
                        <UserCardList/>
                        <Border/>
                        <VideoList/>
                    </Container>
            </main>
        </div>
    );
}

export default WatchPage;