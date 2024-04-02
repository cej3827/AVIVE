import React from "react"
import VideoListItem from "./VideoListItem";
import styled from "styled-components"
import {useNavigate} from "react-router-dom";

const videos = [
    {
        id: 1,
        videouploder: "신혜혜",
        videoname: "동영상"
    },
    {
        id: 2,
        videouploder: "차차소", 
        videoname: "동영상"
    },
    {
        id: 3,
        videouploder: "최최은진진자라",
        videoname: "동영상"
    },
];


const Container = styled.div`
  margin: 5px;
`;

function VideoList(props) {
    const navigate = useNavigate();

    return(
        <Container>
            {videos.map((video) => {
                return (
                    <VideoListItem
                        key={video.id} 
                        video={video}
                        onClick={(item) => {
                            navigate(`/video/${video.id}`);
                        }}
                    />
                );
            })}
        </Container>
    );
}

export default VideoList;