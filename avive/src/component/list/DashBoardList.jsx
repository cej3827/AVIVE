import React from "react"
import VideoListItem from "./DashBoardListItem";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: auto;
`;

function DashBoardList(props) {
    const {videos} = props;

    return(
        <Container>
            {videos.map((video,index) => {
                return (
                    <VideoListItem
                        key={video.id} 
                        video={video}
                    />
                );
            })}
        </Container>
    );
}

export default DashBoardList;