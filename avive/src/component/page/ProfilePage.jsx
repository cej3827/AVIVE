import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileInfo from "../ui/ProfileInfo";
import TabBar from "../ui/TabBar";
import Header from "../ui/Header/Header";

import PlaylistList from '../list/PlaylistList';
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

function ProfilePage(props) {
    const {} = props;

    const hasChannel = true;

    const tabs = [
        { key: 'playlist', label: 'Playlist', content: <PlaylistList communities={communities} /> },
        { key: 'history', label: 'History', content: <VideoTabContent /> },
        { key: 'likes', label: 'Likes', content: <VideoTabContent /> },
        { key: 'clip', label: 'Clip', content: <VideoTabContent /> }
    ];

    return (
        <Wrapper>   
            <Header />
            <Container>     
                <ProfileInfo
                    hasChannel={hasChannel}
                    profileImageSrc="프로필 사진 URL"
                    profileName="Jinee's Daily"
                    profileId="@choioio"
                />
                <TabBar tabs={tabs}/>
            </Container>
        </Wrapper>
    )
}

export default ProfilePage;