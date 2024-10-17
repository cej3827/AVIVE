import React from 'react';
import styled from 'styled-components';
import SortingButton from './SortingButton';
import VideoList from '../list/VideoList';
import data from '../../data.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const VideoTabContent = () => {
  return (
    <Container>
      <SortingButton />
      <VideoList 
        videos={data}
      ></VideoList>
    </Container>
  );
};

export default VideoTabContent;
