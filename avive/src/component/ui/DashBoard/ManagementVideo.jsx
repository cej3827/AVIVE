import React from "react";
import styled from "styled-components";
import { IoTrash } from "react-icons/io5";
import DashBoardList from "../../list/DashBoardList";
import { useParams } from "react-router-dom";
import data from "../../../data.json"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ColumnBar = styled.div`
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px;
    border-top: 1.5px solid lightgrey;
    border-bottom: 1.5px solid lightgrey;
`;

const VideoListContainer = styled.div`
    height: 80%;
`;

const BottomBar = styled.div`
    display: flex;
    align-items: center;
    height: 12%;
    background-color: white;
    border: 0px;
    border-top: 1px solid lightgrey;
`;

const CheckBox = styled.input`
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-all: 1px;
`;

const ColumnText = styled.text`
    font-size: 14px;
    margin: 0 40px 0 40px;
`;

const ColumnText1 = styled.text`
    font-size: 14px;
    margin-left: auto;
    margin-right: 70px;
`;

const DeleteBox = styled.div`
    display: flex;
    flex-diretion: row;
    align-items: center;
    width: 100px;
    height: 30px;
    margin-left: auto;
    margin-right: 50px;
    justify-content: space-around;
`;

const DeleteText = styled.text`
    font-size: 20px;
    font-weight: 600;
    color: #111154;
`;

function ManagementVideo() {
    const { videoId } = useParams();

    const video = data.find((item) => {
        return item.id == videoId;
    });

    return (
        <Container>
            <ColumnBar>
                <CheckBox/>
                <ColumnText>videos</ColumnText>
                <ColumnText1>Date</ColumnText1>
                <ColumnText>Views</ColumnText>
                <ColumnText>Comments</ColumnText>
                <ColumnText>Likes(vs. dislike)</ColumnText>
            </ColumnBar>
            <VideoListContainer>
                <DashBoardList
                    videos={data}
                />
            </VideoListContainer>
            <BottomBar>
                <DeleteBox>
                    <DeleteText>Delete</DeleteText>
                    <IoTrash size="25px" style={{color:"#111154"}}/>
                </DeleteBox>
            </BottomBar>
        </Container>
    );
}

export default ManagementVideo;