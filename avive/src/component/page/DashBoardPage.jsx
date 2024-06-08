import React from "react";
import styled from "styled-components";
import Header from "../ui/Header/Header";
import { LuDot } from "react-icons/lu";
import data from "../../data.json"
import DashBoard from "../ui/DashBoard/DashBoard";
import DashBoardTopVideo from "../list/DashBoardTopVideo";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    height: 20vh;
`;

const Container1 = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: row;
    box-shadow: inset 0px 5px 5px lightgray;
    justify-content: space-between;
`;

const ChannelInfoWrapper = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 5px 0px 5px lightgray;
`;

const ChannelVideoWrapper = styled.div`
    width: 76%;
    margin-top: 7px;
    background-color: white;
`;

const ChannelInfoBox = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const MyChannel = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 0.04em;

    margin-left: 15px;
    align-self: start;
`;

const ChannelInfoImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: #D9D9D9;

    margin-top: 15px;
`;

const ChannelInfoName = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.04em;
    
    margin-bottom: 5px;
`;

const Subscriber = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 31px;
    letter-spacing: 0.02em;    

    margin-left: 20px;
    padding-top: 5px;
    align-self: start;
`;

const ChannelSubscriber = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;

    margin-right: 20px;
    padding-bottom: 5px;
    align-self: end;
`;

const Line = styled.hr`
    width: 88%;
    border: 0px;
    border-top: 0.4px solid lightgrey;
    padding: 3px 0 3px 0;
`;

const ChannelBestVideo = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`;

const TextBox = styled.div`
    display: flex;
    margin-left: 10px;
    margin-bottom: 5px;
    justify-content: start;
    align-items: end;
`
const ChannelBest3 = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-size: 21px;
    letter-spacing: 0.04em;  
`;

const ChannelBestUpdate = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 200;
    font-size: 13px;
    margin-bottom: 2px;
`;


function DashBoardPage() {
    const video = data.find((item) => {
        return item.id;
    });

    return (
        <Wrapper>
            <Container>
            <Header/>
            </Container>
            <Container1>
                <ChannelInfoWrapper>
                    <ChannelInfoBox>
                        <MyChannel>My channel</MyChannel>
                        <ChannelInfoImage></ChannelInfoImage>
                        <ChannelInfoName>hye's story!</ChannelInfoName>
                        <Line/>
                        <Subscriber>Current subscribers</Subscriber>
                        <ChannelSubscriber>28,908</ChannelSubscriber>
                        <Line/>
                    </ChannelInfoBox>
                    <ChannelBestVideo>
                        <TextBox>
                            <ChannelBest3>Top3 Videos</ChannelBest3>
                            <LuDot/>
                            <ChannelBestUpdate>Last 3 days Views</ChannelBestUpdate>
                        </TextBox>
                        <DashBoardTopVideo/>
                    </ChannelBestVideo>
                </ChannelInfoWrapper>
                <ChannelVideoWrapper>
                    <DashBoard></DashBoard>
                </ChannelVideoWrapper>
            </Container1>
        </Wrapper>
    );
}

export default DashBoardPage;