import React from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';

const PlaylistListWrapper = styled.div`
//   max-width: px;
//   margin: 0 auto;
`;

const PlaylistList = ({ communities }) => {
  return (
    <PlaylistListWrapper>
      {communities.map((community, index) => (
        <React.Fragment key={index}>
          <PlaylistItem
            profileImage={community.profileImage}
            channelName={community.channelName}
            postTime={community.postTime}
            content={community.content}
          />
        </React.Fragment>
      ))}
    </PlaylistListWrapper>
  );
};

export default PlaylistList;
