import React, { useState } from 'react';
import styled from 'styled-components';
import HomeTabContent from './HomeTabContent';
import CommunityList from '../list/CommunityList';
import VideoTabContent from './VideoTabContent';
import PlaylistList from '../list/PlaylistList';


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

// const playlists = [
//   { id: 1, title: 'Playlist 1', thumbnail: 'playlist1.jpg' },
//   { id: 2, title: 'Playlist 2', thumbnail: 'playlist2.jpg' },
//   { id: 3, title: 'Playlist 3', thumbnail: 'playlist3.jpg' },
// ];



const TabBarContainer = styled.div`
  // display: flex;
  position: absolute;
  width: 1000px;
  height: 35px;
  left: 180px;
  top: 330px;
  // padding: 10px;
  // margin: 20px;
  // border: solid #111154;
  // border-width: 0 0 5px
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#111154' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  // box-shadow: 2px 2px 10px black;
  // border: ${({active}) => (active ? 'none' : 'solid #111154')};
  // border-width: ${({active}) => (active ? 'none' : '0 0 5px')};
  border-radius: 75px;
  cursor: pointer;
  width: 180px;
  height: 40px; 
  font-size: 16px;
`;

const ContentContainer = styled.div`
  // margin-top: 20px;
  // display: flex;
  position: absolute;
  width: 1000px;
  height: 500px;
  left: 200px;
  top: 380px;
  // border: 1px solid #ccc;
  // border-bottom: 1px solid #ccc;
`;

const HorizontalLine = styled.div`
  width: 1013px;
  height: 4px;
  background: #111154;
  // margin-top: 300px;

  position: absolute;
  left: 200px;
  top: 366px;

  background: #111154;

`;


const TabBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabBarContainer>
        <TabButton active={activeTab === 'home'} onClick={() => handleTabChange('home')}>
          Home
        </TabButton>
        <TabButton active={activeTab === 'video'} onClick={() => handleTabChange('video')}>
          Video
        </TabButton>
        <TabButton active={activeTab === 'playlist'} onClick={() => handleTabChange('playlist')}>
          Playlist
        </TabButton>
        <TabButton active={activeTab === 'community'} onClick={() => handleTabChange('community')}>
          Community
        </TabButton>
      </TabBarContainer>
      <HorizontalLine />
      <ContentContainer>
        {activeTab === 'home' && <HomeTabContent />}
        {activeTab === 'video' && <VideoTabContent />}
        {activeTab === 'playlist' && <PlaylistList communities={communities} />}
        {activeTab === 'community' && <CommunityList communities={communities} />}
      </ContentContainer>
    </div>
  );
};

export default TabBar;
