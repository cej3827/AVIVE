import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChannelInfo from "../ui/ChannelInfo";
import TabBar from "../ui/TabBar";
import Header from "../ui/Header/Header";
import SubscriptionButton from "../ui/SubscribeButton";

import CommunityList from '../list/CommunityList';
import PlaylistList from '../list/PlaylistList';
import HomeTabContent from "../ui/HomeTabContent";
import VideoTabContent from "../ui/VideoTabContent";

const communities = [
    { 
      profileImage: 'profile1.jpg',
      channelName: 'Channel 1',
      postTime: '2 hours ago',
      content: 'Content of Community 1' 
    },
    { 
      profileImage: 'profile2.jpg',
      channelName: 'Channel 2',
      postTime: '1 day ago',
      content: 'Content of Community 2' 
    },
    { 
      profileImage: 'profile3.jpg',
      channelName: 'Channel 3',
      postTime: '1 week ago',
      content: 'Content of Community 3' 
    },
  ];


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function ChannelPage(props) {
    const {} = props;
    const navigate = useNavigate();
    const isOwnChannel = true;

    const tabs = [
        { key: 'home', label: 'Home', content: <HomeTabContent /> },
        { key: 'video', label: 'Video', content: <VideoTabContent /> },
        { key: 'playlist', label: 'Playlist', content: <PlaylistList communities={communities} /> },
        { key: 'community', label: 'Community', content: <CommunityList communities={communities} /> }
    ];

    return (
        <Wrapper>   
            <Header />
            <Container>     
                <ChannelInfo
                    isOwnChannel={isOwnChannel}
                    profileImageSrc="프로필 사진 URL"
                    channelName="Jinee's Daily"
                    subscriberCount="Subscriber 120k"
                    channelId="@choioio"
                    channelIntro="hi"
                    button={<SubscriptionButton />} // SubscribeButton 대신 ProfileButton을 전달하면 프로필 버튼으로 대체
                />
                <TabBar tabs={tabs}/>
            </Container>
        </Wrapper>
    )
}

export default ChannelPage;