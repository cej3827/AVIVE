import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
    display: flex;
    flex-direction: colunm;
    padding: 6px;
`;

const VideoWapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const VideoImage = styled.div`
    display: flex;
    width: 90px;
    height: 48px;
    margin-left: 10px;
    background-color: lightgrey;
`;

const VideoTitle = styled.div`
    display: flex;
    font-size: 12px;
    padding-left: 10px;
    padding-top: 2px;
`;

function DashBoardTopVideo() {

    const title = ["제목1", "제목2", "제목3"];
    const VideoList = () => {
        return(
            <div>
                <VideoContainer>
                <VideoWapper>
                    <VideoImage/>
                    <VideoTitle>video 제목</VideoTitle>
                </VideoWapper>
                </VideoContainer>
            </div>
        );
    };

    return (
        <div>
            {title.map((videoItem, index) => {
                return(
                    <div key={index}>
                        <VideoContainer>
                        <VideoWapper>
                            <VideoImage/>
                            <VideoTitle>{title[index]}</VideoTitle>
                        </VideoWapper>
                        </VideoContainer>
                    </div>
                );
            })}
        </div>
    );
}

export default DashBoardTopVideo;