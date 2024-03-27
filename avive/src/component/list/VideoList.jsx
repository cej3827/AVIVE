import React from "react"
import VideoListItem from "./VideoListItem";
import styled from "styled-components"

const videos = [
    {
        videouploder: "신혜혜",
        videoname: "동영상"
    },
    {
        videouploder: "차차소", 
        videoname: "동영상"
    },
    {
        videouploder: "최최은진진자라",
        videoname: "동영상"
    },
];

const Container = styled.div`
  margin: 5px;
`;

function VideoList(props) {
    return(
        <Container>
            {videos.map((video) => {
                return (
                    <VideoListItem videoname={video.videoname} videouploder={video.videouploder} />
                );
            })}
        </Container>
    );
}

export default VideoList;