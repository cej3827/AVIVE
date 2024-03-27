import React from "react";
import styled from "styled-components";
import SubscribeButton from "./SubscribeButton";

const ChannelInfoContainer = styled.div`
  display: flex;
  position: absolute;
  width: 1000px;
  height: 130px;
  left: 180px;
  top: 120px;
  padding: 40px;
  // border: 1px solid #ccc;
`;

const ProfilePicture = styled.img`
  // position: absolute;
  width: 130px;
  height: 130px;
  // left: 23px;
  // top: 100px;
  border-radius: 50%;
  margin-right: 20px;

  background: #D9D9D9;

`;

const ProfileInfo = styled.div`
    flex-grow: 1;
    margin: 15px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // border: solid 1px;
`;

const ChannelName = styled.div`
    // flex-direction: row;
    margin-bottom: 5px;
    display: flex;
    // align-items: center;
    font-size: 25px;
    // border: solid 1px;
`;

const ChannelId = styled.p`
  margin: 5px 0;
  // padding-bottom: 20px;
  font-size: 18px;
  color: #666;
  // border: solid 1px;
`;

const ChannelIntro = styled.p`
  // border: solid 1px;
  margin: 0;

`;

const SubscriberCount = styled.span`
  margin: 10px;
  font-size: 15px;
  color: #666;
  margin-right: 300px;
`;

const VerticalLine = styled.div`
  width: 4px;
  height: 35px;
  background-color: #ccc;
  margin: 0 20px;
`;


function ChannelInfo(props) {
    const { value, onChange } = props;

    return (
        <ChannelInfoContainer>
          <ProfilePicture src="프로필 사진 URL" alt="프로필 사진" />
          <ProfileInfo>
            <ChannelName> Jinee's Daily
              <VerticalLine />
              <SubscriberCount>Subscriber 120k</SubscriberCount>
              <SubscribeButton></SubscribeButton>
            </ChannelName>
            <ChannelId>@choioio</ChannelId>
            <ChannelIntro>hi im hacher</ChannelIntro>
          </ProfileInfo>
        </ChannelInfoContainer>
      );
}

export default ChannelInfo;