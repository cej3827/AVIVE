import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 195px;
    margin: 10px 30px 10px 30px;
    align-items: end;
`;

const Container1 = styled.div`
    display: grid;
    height: 70%;
    margin-bottom: 15px;
    background-color: blue;
`;

const VideoInfo = styled.div`
    font-size: 12px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #8989A4;
`;

const VideoUploder = styled.div`
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #444343;
`;

const VideoName = styled.div`
    font-size: 22px;
    line-height: 39px;
    display: flex;
    align-items: center;
    color: #000000;
`;

const Rectangle25 = styled.div`
    width: 315px;
    height: 165px;
    background: #D9D9D9;
    margin: 15px;
`;

function VideoListItem(props) {
    return (
        <Container>
            <Rectangle25/>
            <Container1>
                <VideoName>{props.videoname}</VideoName>
                <VideoUploder>{props.videouploder}</VideoUploder>
                <VideoInfo>View 234</VideoInfo>
            </Container1>
        </Container>
    );
}

export default VideoListItem;

