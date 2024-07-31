import React from 'react';
import VideoListItem2 from './VideoListItem2';
import styled from "styled-components";

const videoo =[
  {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
  {title:"Today, I leave the GOOGLE .", nickname:"soyoung"},

  {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
  {title:"Today, I leave the GOOGLE .",nickname:"soyoung"},
  {title:"Today, I join in KAKAO ~!!",nickname:"ckthdud"},
  {title:"Today, I leave the WOOA .",nickname:"soyoung"},
  {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
  {title:"Today, I leave the GOOGLE .",nickname:"soyoung"},
  {title:"Today, I join in KAKAO ~!!",nickname:"ckthdud"},
  {title:"Today, I leave the WOOA .",nickname:"soyoung"}
];

const UlStyle = styled.div `
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  margin-right: auto;
  margin-left: auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function VideoList2(){
  return (
    <UlStyle>
        {videoo.map((video) => <VideoListItem2 title={video.title} nickname={video.nickname} />)}
    </UlStyle>
  )
}

export default VideoList2;