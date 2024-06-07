import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileInfo from "../ui/ProfileInfo";
import TabBar from "../ui/TabBar";
import Header from "../ui/Header/Header";

import PlaylistList from '../list/PlaylistList';
import VideoTabContent from "../ui/VideoTabContent";

  const playlists = [
    {
      thumbnail: 'playlist1_thumbnail.jpg',
      channelName: 'Channel 1',
      content: 'Playlist 1 description',
      videos: [
        { thumbnail: 'video1_thumbnail.jpg', title: 'Video 1', description: 'Description of video 1' },
        { thumbnail: 'video2_thumbnail.jpg', title: 'Video 2', description: 'Description of video 2' },
      ],
    },
    {
      thumbnail: 'playlist2_thumbnail.jpg',
      channelName: 'Channel 2',
      content: 'Playlist 2 description',
      videos: [
        { thumbnail: 'video3_thumbnail.jpg', title: 'Video 3', description: 'Description of video 3' },
        { thumbnail: 'video4_thumbnail.jpg', title: 'Video 4', description: 'Description of video 4' },
      ],
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
        { key: 'playlist', label: 'Playlist', content: <PlaylistList playlists={playlists} /> },
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