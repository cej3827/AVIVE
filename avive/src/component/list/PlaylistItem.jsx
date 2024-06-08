import React, { useState } from 'react';
import styled from 'styled-components';

const PlaylistItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  margin-bottom: 8px;
  // border: 1px solid;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 70px;
  margin-right: 16px;
`;

const PlaylistName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const PlaylistInfo = styled.p`
  font-size: 13px;
  margin-top: 4px;
`;

const VideoListWrapper = styled.div`
  padding: 20px 40px 20px 40px;
  // border: 1px solid;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
`;

const VideoItemWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const VideoThumbnail = styled.img`
  width: 80px;
  height: 45px;
  margin-right: 10px;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoTitle = styled.h4`
  margin: 0;
  font-size: 14px;
`;

const VideoDescription = styled.p`
  margin: 0;
  font-size: 12px;
`;

const PlaylistDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const VideoCount = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const PlayAllButton = styled.button`
  font-size: 13px;
  padding: 6px 12px;
  background-color: #111154;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const PlaylistItem = ({ thumbnail, channelName, content, videos }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePlayAll = () => {
    // Play all videos logic here
    console.log('Playing all videos');
  };

  return (
    <PlaylistItemWrapper onClick={handleToggle}>
      <PlaylistHeader>
        <Thumbnail src={thumbnail} alt="thumbnail" />
        <div>
          <PlaylistName>{channelName}</PlaylistName>
          <PlaylistInfo>{content}</PlaylistInfo>
        </div>
      </PlaylistHeader>
      {isExpanded && (
        <VideoListWrapper>
          <PlaylistDetails>
            <VideoCount>{videos.length} Videos</VideoCount>
            <PlayAllButton onClick={(e) => {
              e.stopPropagation(); // Prevent parent click event
              handlePlayAll();
            }}>Play All</PlayAllButton>
          </PlaylistDetails>
          {videos.map((video, index) => (
            <VideoItemWrapper key={index}>
              <VideoThumbnail src={video.thumbnail} alt="video thumbnail" />
              <VideoInfo>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoDescription>{video.description}</VideoDescription>
              </VideoInfo>
            </VideoItemWrapper>
          ))}
        </VideoListWrapper>
      )}
    </PlaylistItemWrapper>
  );
};

export default PlaylistItem;
