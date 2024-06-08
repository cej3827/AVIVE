import React from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';

const PlaylistListWrapper = styled.div`
//   max-width: px;
//   margin: 0 auto;
`;

const PlaylistList = ({ playlists }) => {
  return (
    <PlaylistListWrapper>
      {Array.isArray(playlists) && playlists.length > 0 ? (
        playlists.map((playlist, index) => (
          <PlaylistItem
            key={index}
            thumbnail={playlist.thumbnail}
            channelName={playlist.channelName}
            content={playlist.content}
            videos={playlist.videos}
          />
        ))
      ) : (
        <p>No playlists available</p>
      )}
    </PlaylistListWrapper>
  );
};

export default PlaylistList;
