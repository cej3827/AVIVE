import React from "react"
import VideoListItem from "./VideoListItem";
import styled from "styled-components"
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  margin: 5px;
`;

function VideoList(props) {
    const {videos} = props;

    const navigate = useNavigate();

    return(
        <Container>
            {videos.map((video,index) => {
                return (
                    <VideoListItem
                        key={video.id} 
                        video={video}
                        onClick={() => {
                            navigate(`/video/${video.id}`);
                        }}
                    />
                );
            })}
        </Container>
    );
}

export default VideoList;