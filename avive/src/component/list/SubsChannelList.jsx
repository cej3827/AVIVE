import React from "react";
import styled from "styled-components";
import SubsChannel from "./SubsChannel";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x:auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
    <Wrapper>
      {SubsChan.map((channel) => <SubsChannel channelname={channel.channelname} />)}
    </Wrapper>
  );
}

