import React from 'react';
import Video from './Video';
import './videoList.css';

function RecommendedVideoList(){
  const videoo =[
    {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
    {title:"Today, I leave the GOOGLE .",nickname:"soyoung"},
    {title:"Today, I join in KAKAO ~!!",nickname:"ckthdud"},
    {title:"Today, I leave the WOOA .",nickname:"soyoung"},
    {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
    {title:"Today, I leave the GOOGLE .",nickname:"soyoung"},
    {title:"Today, I join in KAKAO ~!!",nickname:"ckthdud"},
    {title:"Today, I leave the WOOA .",nickname:"soyoung"},
    {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
    {title:"Today, I leave the GOOGLE .",nickname:"soyoung"},
    {title:"Today, I join in KAKAO ~!!",nickname:"ckthdud"},
    {title:"Today, I leave the WOOA .",nickname:"soyoung"}
  ];

  return (
    <div style={{display:'flex',flexDirection:"row", paddingTop:"30px"}}>
      <ul>
        {videoo.map((video) => <Video title={video.title} nickname={video.nickname} />)}
      </ul>
    </div>
  )
}


export default RecommendedVideoList;