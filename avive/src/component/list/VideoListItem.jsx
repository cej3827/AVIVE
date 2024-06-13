import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 200px;
    margin: 10px 30px 10px 30px;
    align-items: end;
`;

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90%;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-content: end;

    margin-bottom: 20px;
`;

const VideoInfo = styled.div`
    font-size: 12px;
    line-height: 25px;
    margin-left: 2px;
    color: #8989A4;
`;

const VideoUploder = styled.div`
    display: flex;
    font-size: 16px;
    line-height: 25px;
    color: #444343;
`;

const VideoName = styled.div`
    font-size: 20px;
    line-height: 39px;
    color: #000000;
`;

const Rectangle25 = styled.div`
    width: 300px;
    height: 80%;
    background: #D9D9D9;
    margin: 15px;
`;

function VideoListItem(props) {
    const {video, onClick} = props;

    return (
        <Container onClick={onClick}>
            <Rectangle25/>
            <Container1>
                <VideoName>{video.title}</VideoName>
                <Container2>
                    <VideoUploder>{video.uploder}</VideoUploder>
                    <VideoInfo>View {video.viewCount}</VideoInfo>
                </Container2>
            </Container1>
        </Container>
    );
}

export default VideoListItem;

