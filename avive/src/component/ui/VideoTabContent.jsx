import React from 'react';
import styled from 'styled-components';
import SortingButton from './SortingButton';
import VideoList from '../list/VideoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const VideoTabContent = () => {
  return (
    <Container>
      <SortingButton />
      <VideoList />
    </Container>
  );
};

export default VideoTabContent;
