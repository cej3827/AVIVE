import React from "react";
import styled from "styled-components";
import SubsChannel from "./SubsChannel";

const SubsChan =[
  {channelname:"ckthdud"},
  {channelname:"hyewon"},
  {channelname:"eunjin"},
  {channelname:"ckthdud"},
  {channelname:"hyewon"},
  {channelname:"eunjin"},
  {channelname:"ckthdud"},
  {channelname:"hyewon"},
  {channelname:"eunjin"},
  {channelname:"eunjin"},
  {channelname:"ckthdud"},
  {channelname:"hyewon"},
  {channelname:"eunjin"},
  {channelname:"ckthdud"},
  {channelname:"hyewon"},
  {channelname:"eunjin"},
]

export default function SubsChannelList() {
  return (
    <div style={{display:'flex'}}>
      <ul style={{display:'flex', flexDirection:'row'}}>
        {SubsChan.map((channel) => <SubsChannel channelname={channel.channelname} />)}
      </ul>
    </div>
  );
}

