import React from 'react';
import styled from "styled-components";
import VideoListItem3 from "./VideoListItem3";

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

const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


export default function VideoList3(){
  return (
    <Wrapper>
        {videoo.map((video) => <VideoListItem3 title={video.title} nickname={video.nickname} />)}
    </Wrapper>
  )
}
