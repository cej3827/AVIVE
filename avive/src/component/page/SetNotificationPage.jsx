import React, {useState} from "react";
import styled from "styled-components";
import HeaderSet from "../ui/Header/HeaderSet";
import SwitchButton from "../ui/SwitchButton";

const SemiTitle = styled.div`
  /* subscribe */

  position: absolute;
  width: 425.95px;
  height: 38.61px;
  left: 68px;
  top: 10px;

  font-family: 'Jockey One';
  font-weight: 400;
  font-size: 33px;
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
  top: 60px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 35px;

  color: #A5A5A5;
`;

const Wrapper = styled.div`
  /* Group 177 */
  position: absolute;
  width: 1140px;
  height: 101px;
  left: 68px;
  top: 150px;
  bottom: 101px;
`;

const Line = styled.hr`
  /* Line 4 */

  position: absolute;
  width: 1450px;
  height: 0px;
  left: 54px;
  top: 125px;

  border: 1px solid #D6D6D6;
  transform: rotate(-0.15deg);

`;

export default function SetNotification(){
  return(
    <div>
      <HeaderSet name="notification"/>
      <Wrapper>
        <div>
          <SemiTitle>subscribe</SemiTitle>
          <Contents>We’ll let you know if there’s an update on the channel you subscried to.</Contents>
          <SwitchButton />
          <Line/>
        </div>

        <div style={{top:'500px'}}>
          <SemiTitle>my channel</SemiTitle>
          <Contents>We’ll let you know if any video on your channel get a comment.</Contents>
          <Line/>
        </div>

        <SemiTitle style={{top:'330px'}}>reply</SemiTitle>
        <Contents style={{top:'380px'}}>We’ll let you know if there’s a comment in your comment.</Contents>
        <Line style={{top:'450px'}}/>

        <SemiTitle style={{top:'510px'}}>mentioned</SemiTitle>
        <Contents style={{top:'560px'}}>We'll let you know, If someone mentions you.</Contents>
      </Wrapper>
    </div>
  );
}