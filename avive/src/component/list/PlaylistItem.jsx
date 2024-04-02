import React from 'react';
import styled from 'styled-components';

const PlaylistItemWrapper = styled.div`
  display: flex;
//   align-items: center;
  padding: 16px;
//   margin-bottom: 16px;
//   border: solid 1px;
`;

const Thumbnail = styled.img`
  width: 240px;
  height: 130px;
  margin-right: 16px;
`;

const PlaylistName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const PlaylistInfo = styled.p`
  margin-top: 80px;
  font-size: 13px;
`;

const PlaylistItem = ({ thumbnail, channelName, content }) => {
  return (
    <PlaylistItemWrapper>
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <div>
        <div>
          <PlaylistName>{channelName}</PlaylistName>
        </div>
        <PlaylistInfo>{content}</PlaylistInfo>
      </div>
    </PlaylistItemWrapper>
  );
};

export default PlaylistItem;
