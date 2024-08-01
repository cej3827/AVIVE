import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* Frame 91 */

  position: absolute;
  width: 400px;
  height: auto;
  left: 0px;
  top: 5.9px;

`;

const Date = styled.div`
  /* Yesterday */

  position: absolute;
  width: 300px;
  height: 29.36px;
  left: 17px;
  top: 20px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  align-items: center;

  color: #111154;

`;

const ContentsWrapper = styled.div`
  /* Group 184 */

  position: absolute;
  width: 383px;
  height: 31px;
  left: 0px;
  top: 20px;

  border: none;

`;

const UploadTime = styled.div`
  /* 6 h ago */

  position: absolute;
  width: 55px;
  height: 12px;
  left: 330px;
  top: 60px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const NotificationContents = styled.div`
  /* ckthdud post a new video ! */

  position: absolute;
  width: 232px;
  height: 31px;
  left: 40px;
  top: 51px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const ProfileImg = styled.img`

  position: absolute;
  width: 27.5px;
  height: 27.5px;
  left: 0px;
  top: 52px;

  width:100%;
  height: 100%;
  object-fit: contain;
  border: none;
`;

export default function NotificationListModalItem(props){
  return(
    <Wrapper>
      {/* date */}
      <Date>{props.date}</Date>

      {/* content */}
      <ContentsWrapper>

        {/* profile image */}
        <ProfileImg src={props.profile}/>

        {/* notification content */}
        <NotificationContents>{props.content}</NotificationContents>

        {/* upload time */}
        <UploadTime>{props.time}</UploadTime>

      </ContentsWrapper>
    </Wrapper>
  );
}