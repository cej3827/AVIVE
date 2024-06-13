import React from 'react';
import styled from 'styled-components';
import { BsFillPinFill } from "react-icons/bs";
import CommunityItem from '../list/CommunityItem';
import VideoListItem from '../list/VideoListItem';
import VideoList2 from '../list/VideoList2';

const HomeTabContentContainer = styled.div`
  // margin-top: 20px;
  // border: 1px solid;
`;

const Container = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  // padding-bottom: 100px; 
  display: flex;
  flex-Direction: 'row';
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

const VideosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

// const Gradation = styled.div`
//   height: 100%;
//   width: 300px; 
// `;

const HomeTabContent = () => {
  // 고정된 커뮤니티
  const FixedCommunity = () => (
    <Container>
      <FlagIcon />
      <FixedCommunityHeader>
        <CommunityItem
          profileImage="profile1.jpg"
          channelName="Channel 1"
          postTime="2 hours ago"
          content="Content of Community 1"
        />
      </FixedCommunityHeader>
    </Container>
  );

  // 고정된 영상
  const FixedVideo = () => {
    const fixedVideo = {
      title: "ohohohoh",
      uploder: "choi",
      viewCount: 239,
    };

    return (
      <Container>
        <FlagIcon />
        <FixedCommunityHeader>
          <VideoListItem
            video={fixedVideo}
          />
        </FixedCommunityHeader>
      </Container>
    );
  };

  // 조회수로 영상 목록
  const PopularVideos = () => {
    return (
      <Container>
        <VideosContainer>
          <VideoList2 />
          {/* <Gradation /> */}
        </VideosContainer>
      </Container>
    );
  };

  return (
    <HomeTabContentContainer>
      <FixedCommunity />
      <FixedVideo />
      <PopularVideos />
    </HomeTabContentContainer>
  );
};

export default HomeTabContent;
