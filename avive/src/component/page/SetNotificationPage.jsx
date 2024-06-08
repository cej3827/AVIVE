import React, {useState} from "react";
import styled from "styled-components";
import HeaderSet from "../ui/Header/HeaderSet";

const SemiTitle = styled.div`
  /* subscribe */

  position: absolute;
  width: 425.95px;
  height: 38.61px;
  left: 68px;
  top: 57px;

  font-family: 'Jockey One';
  font-weight: 400;
  font-size: 40px;
  font-style: normal;
  line-height: 56px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Contents = styled.div`
  /* We’ll let you know if there’s an update on the channel you subscried to. */

  position: absolute;
  width: 1000px;
  height: 52px;
  left: 68px;
  top: 106px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;

  color: #A5A5A5;
`;

const Wrapper = styled.div`
  /* Group 177 */
  position: absolute;
  width: 1140px;
  height: 101px;
  left: 68px;
  top: 200px;
  bottom: 101px;
`;

export default function SetNotification(){
  return(
    <div>
      <HeaderSet name="notification"/>
      <Wrapper>
        <SemiTitle>subscribe</SemiTitle>
        <Contents style={{top:'105px'}}>We’ll let you know if there’s an update on the channel you subscried to.</Contents>
        <SemiTitle style={{top:'230px'}}>my channel</SemiTitle>
        <Contents style={{top:'280px'}}>We’ll let you know if any video on your channel get a comment.</Contents>
        <SemiTitle style={{top:'400px'}}>reply</SemiTitle>
        <Contents style={{top:'460px'}}>We’ll let you know if there’s a comment in your comment.</Contents>
        <SemiTitle style={{top:'590px'}}>mentioned</SemiTitle>
        <Contents style={{top:'640px'}}>We'll let you know, If someone mentions you.</Contents>
      </Wrapper>
    </div>
  );
}