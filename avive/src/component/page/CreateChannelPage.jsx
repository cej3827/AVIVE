import React from "react";
import styled from "styled-components";
import HeaderSet from "../ui/Header/HeaderSet";
import { IoPersonCircle } from "react-icons/io5";

const ProfileIcon = styled(IoPersonCircle)`
  /* Account circle */
  position: absolute;
  width: 300px;
  height: 300px;
  left: 500px;
  top: 70px;
`;

const Title = styled.div`
  /* Name */

  position: absolute;
  width: 400px;
  height: 65px;
  top: 450px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const Contents = styled.div`
  /* Choose a channel name that represents me and my content well. The changed name and profile picture will only appear on YouTube except for other Google services. The name can be changed twice within 14 days. */

  position: absolute;
  width: 1314px;
  height: 65px;
  top: 510px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #C0C0C0;

`;

const InputBox = styled.input`
  /* Rectangle 13 */

  position: absolute;
  width: 1314px;
  height: 43px;
  top : 590px;

  background: #d8d8d8;
  border-radius: 29px;
  border:none;

`;

const Wrapper = styled.div`
  /* Frame 15 */

  position: absolute;
  width: 1511px;
  height: 700px;
  left: 152px;
  top: 110px;
  overflow-y: scroll;
`;

export default function CreateChannel(){
  return (
    <div>
      <HeaderSet name="create channel"/>
      <Wrapper>
        
        <ProfileIcon/>

        <Title>Name</Title>
        <Contents>Choose a channel name that represents me and my content well. The changed name and profile picture will only appear on YouTube except for other Google services. The name can be changed twice within 14 days.</Contents>
        <InputBox/>
        <Title style={{top:'700px'}}>Handle</Title>
        <Contents style={{top:'770px'}}>Select a unique handle by adding letters and numbers. You can change the handle again within 14 days. The handle can be changed twice every 14 days.</Contents>
        <InputBox style={{top:'850px'}}/>
        <Title style={{top:'950px'}}>Introduction of Channel</Title>
        <Contents style={{top:'1000px'}}>Please explain the channel to the viewers. This description appears in the Information section of the channel, search results, and so on.</Contents>
        <InputBox style={{top:'1050px'}}/>
        <Title style={{top:'1150px'}}>Links</Title>
        <Contents style={{top:'1210px'}}>Share external links with your audience. Links appear on the channel profile and information page.</Contents>
        <InputBox style={{top:'1250px'}}/>
        <Title style={{top:'1330px'}}>e-mail address</Title>
        <Contents style={{top:'1390px'}}>Please provide a contact number for business inquiries. The email address you entered can be displayed in the Information section of the channel and can be viewed by the viewer.</Contents>
        <InputBox style={{top:'1460px'}}/>

      </Wrapper>
    </div>
  );
}