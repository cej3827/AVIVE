// CommunityItem.jsx

import React from 'react';
import styled from 'styled-components';

const CommunityItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
//   border: solid 1px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ChannelName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const PostTime = styled.span`
  color: #666;
  font-size: 14px;
  margin-right: 8px;
`;

const CommunityItemContent = styled.p`
  margin-top: 8px;
`;

const CommunityItem = ({ profileImage, channelName, postTime, content }) => {
  return (
    <CommunityItemWrapper>
      <ProfileImage src={profileImage} alt="Profile" />
      <div>
        <div>
          <ChannelName>{channelName}</ChannelName>
          <PostTime>{postTime}</PostTime>
        </div>
        <CommunityItemContent>{content}</CommunityItemContent>
      </div>
    </CommunityItemWrapper>
  );
};

export default CommunityItem;
