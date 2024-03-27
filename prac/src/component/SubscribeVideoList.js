import React from 'react';
import Video from './Video';
import './videoList.css';

function SubscribeVideoList(){
  const videoo =[
    {title:"Today, I join in GOOGLE ~!!", nickname:"ckthdud"},
    {title:"Today, I leave the GOOGLE .", nickname:"soyoung"},
    {title:"Today, I join in KAKAO ~!!", nickname:"ckthdud"},
    {title:"Today, I leave the WOOA .", nickname:"soyoung"},
  ];

  return (
    <div style={{display:'flex',flexDirection:"row", paddingTop:"30px", marginLeft:"80px"}}>
      <ul>
        {videoo.map((video) => <Video title={video.title} nickname={video.nickname} />)}
      </ul>
    </div>
  )
}


export default SubscribeVideoList;