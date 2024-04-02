import React from 'react';
import styled from 'styled-components';
import { FaFlag } from 'react-icons/fa'; // react-icons에서 Flag 아이콘 불러오기
import CommunityItem from '../list/CommunityItem';
import SortingButton from './SortingButton';
import VideoList from '../list/VideoList';

// const HomeTabContentContainer = styled.div`
//   // margin-top: 20px;
// `;

// const CommunityContainer = styled.div`
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ccc;
//   padding-bottom: 100px; 
// `;

// const FixedCommunityHeader = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const FlagIcon = styled(FaFlag)`
//   margin-right: 5px;
  
// `;

// const FixedVideoContainer = styled.div`
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ccc; 
//   padding-bottom: 100px; 
// `;

// const PopularVideosContainer = styled.div`
//   margin-bottom: 20px;
//   padding-bottom: 20px;
// `;

const VideoTabContent = () => {
  // 정렬 버튼
//   const FixedCommunity = () => (
//     <CommunityContainer>
//       <FixedCommunityHeader>
//         <FlagIcon /> 
//       </FixedCommunityHeader>
//       <CommunityItem
//         profileImage="profile1.jpg"
//         channelName="Channel 1"
//         postTime="2 hours ago"
//         content="Content of Community 1"
//       />
//     </CommunityContainer>
//   );

  // 영상
//   const FixedVideo = () => (
//     <FixedVideoContainer>
//       <h3>고정된 영상</h3>
//       {/* 고정된 영상 내용 */}
//     </FixedVideoContainer>
//   );

  return (
    <SortingButton />
  );
};

export default VideoTabContent;
