import React from 'react';
import styled from 'styled-components';
import { BsFillPinFill } from "react-icons/bs";
import CommunityItem from '../list/CommunityItem';

const HomeTabContentContainer = styled.div`
  // margin-top: 20px;
  // border: 1px solid;
`;

const CommunityContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 100px; 
  display: flex;
  flex Direction: 'row';
  // border: 1px solid;
`;

const FixedCommunityHeader = styled.div`
  // display: flex;
  // align-items: center;
  margin-bottom: 10px;
  // border: 1px solid;
`;

const FlagIcon = styled(BsFillPinFill)`
  margin-right: 8px;
  margin-top: 20px;
  font-size: 18px;
  // border: 1px solid;
  
`;

const FixedVideoContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc; 
  padding-bottom: 100px; 
`;

const PopularVideosContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

const HomeTabContent = () => {
  // 고정된 커뮤니티
  const FixedCommunity = () => (
    <CommunityContainer>
      <FlagIcon />
      <FixedCommunityHeader>
        <CommunityItem
          profileImage="profile1.jpg"
          channelName="Channel 1"
          postTime="2 hours ago"
          content="Content of Community 1"
        />
      </FixedCommunityHeader>
    </CommunityContainer>
  );

  // 고정된 영상
  const FixedVideo = () => (
    <FixedVideoContainer>
      <h3>고정된 영상</h3>
      {/* 고정된 영상 내용 */}
    </FixedVideoContainer>
  );

  // 조회수로 영상 목록
  const PopularVideos = () => (
    <PopularVideosContainer>
      <h3>Popular</h3>
      {/* 조회수로 영상 목록 */}
    </PopularVideosContainer>
  );

  return (
    <HomeTabContentContainer>
      <FixedCommunity />
      <FixedVideo />
      <PopularVideos />
    </HomeTabContentContainer>
  );
};

export default HomeTabContent;
