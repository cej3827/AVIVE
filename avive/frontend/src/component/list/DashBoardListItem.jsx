import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    margin: 5px;
    align-items: start;
`;

const CheckBox = styled.input`
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-all: 1px;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
`;

const VideoInfoBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const VideoInfoState = styled.div`
    display: flex;
    flex-direction: row;
`;

const VideoInfoBox1 = styled.div`
    display: flex;
    width: 45%;
    flex-direction: row;
`;

const VideoInfoBox2 = styled.div`
    display: flex;
    width: 55%;
    flex-direction: row;
`;

const VideoInfoText = styled.div`
    font-size: 14px;
    margin: 0 10px 0 10px;
    line-height: 25px;
    margin-left: 2px;
`;

const VideoInfoText1 = styled.div`
    width: 12%;
    font-size: 14px;
    line-height: 25px;
    margin-left: 10px;
`;

const VideoInfoText2 = styled.div`
    width: 15%;
    font-size: 14px;
    line-height: 25px;
    margin-left: 40px;
    margin-left: auto;
`;

const VideoInfoText3 = styled.div`
    width: 13%;
    font-size: 14px;
    line-height: 25px;
    margin-left: 40px;
    margin-left: auto;
`;

const VideoInfoText4 = styled.div`
    width: 18%;
    font-size: 14px;
    line-height: 25px;
    margin-left: 40px;
    margin-left: auto;
`;


const VideoImage = styled.div`
    width: 100px;
    height: 50px;
    margin: 0 10px 0 10px;
    background: #D9D9D9;
`;

function DashBoardListItem(props) {
    const {video} = props;

    return (
        <Container>
            <CheckBox/>
            <VideoImage/>
            <VideoWrapper>
                <VideoInfoBox>
                    <VideoInfoBox1>
                        <VideoInfoText>{video.title}</VideoInfoText>
                    </VideoInfoBox1>
                    <VideoInfoBox2>
                        <VideoInfoText1>{video.date}</VideoInfoText1>
                        <VideoInfoText2>{video.Views}</VideoInfoText2>
                        <VideoInfoText3>{(video.comments).length}</VideoInfoText3>
                        <VideoInfoText4>{((video.Like)/(video.dislike))}</VideoInfoText4>
                    </VideoInfoBox2>
                </VideoInfoBox>
                <VideoInfoState></VideoInfoState>
            </VideoWrapper>
        </Container>
    );
}

export default DashBoardListItem;