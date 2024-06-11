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

const ErrorMessage = styled.div`
  color: #8989A4;
  font-size: 50px;
  text-align: center;
  margin-top: 300px;
`;

function ChannelPage(props) {
    const {} = props;
    const navigate = useNavigate();
    const isOwnChannel = false;

    const [isChannelExist, setIsChannelExist] = useState(true); //채널 존재함?

    const tabs = [
        { key: 'home', label: 'Home', content: <HomeTabContent /> },
        { key: 'video', label: 'Video', content: <VideoTabContent /> },
        { key: 'playlist', label: 'Playlist', content: <PlaylistList playlists={playlists} /> },
        { key: 'community', label: 'Community', content: <CommunityList communities={communities} /> }
    ];

    return (
      <Wrapper>   
      <Header />
      {isChannelExist ? (
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
      ) : (
        <ErrorMessage>
          Channel does not exist
        </ErrorMessage>
      )}
    </Wrapper>

  )
}

export default ChannelPage;