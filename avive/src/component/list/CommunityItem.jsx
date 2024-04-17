import React, { useState } from 'react';
import styled from 'styled-components';
import { VscKebabVertical } from "react-icons/vsc";

const CommunityItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 16px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ChannelInfoWrapper = styled.div`
  display: flex;
  align-items: center;
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

const DropdownButton = styled(VscKebabVertical)`
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  // position: absolute;
  // top: 100%;
  // right: 0;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  // z-index: 1;
`;

const MenuItem = styled.div`
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const CommunityItem = ({ isOwnChannel, profileImage, channelName, postTime, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CommunityItemWrapper>
      <ChannelInfoWrapper>
        <ProfileImage src={profileImage} alt="Profile" />
        <div>
          <div>
            <ChannelName>{channelName}</ChannelName>
            <PostTime>{postTime}</PostTime>
          </div>
          <CommunityItemContent>{content}</CommunityItemContent>
        </div>
      </ChannelInfoWrapper>
      {isOwnChannel && (
        <div>
          <DropdownButton onClick={toggleMenu} />
          <DropdownMenu isOpen={isMenuOpen}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Fix</MenuItem>
          </DropdownMenu>
        </div>
      )}
    </CommunityItemWrapper>
  );
};

export default CommunityItem;
