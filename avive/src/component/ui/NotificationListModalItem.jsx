import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* Group 182 */

  position: absolute;
  width: 400px;
  left: 0px;
  top: 0px;
  height: auto;

`;

const SmallHeader = styled.div`
  /* Group 183 */

  position: absolute;
  width: 372px;
  height: 29.36px;
  left: 17px;
  top: 0px;

`;

const ContentsWrapper = styled.div`
  /* Group 184 */

  position: absolute;
  width: 383px;
  height: 31px;
  left: 17px;
  top: 51px;

`;

const ContentsHour = styled.div`
  /* 6 h ago */

  position: absolute;
  width: 55px;
  height: 12px;
  left: 345px;
  top: 60px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const ContentsNotification = styled.div`
  /* ckthdud post a new video ! */

  position: absolute;
  width: 232px;
  height: 31px;
  left: 61px;
  top: 51px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const ContentsProfile = styled.div`
  /* Vector */

  position: absolute;
  width: 27.5px;
  height: 28.33px;
  left: 17px;
  top: 52px;

`;

const ProfileImg = styled.img`
  width:100%;
  height: 100%;
  object-fit: contain;
`;

export default function NotificationListModalItem(props){
  return(
    <Wrapper>
      <SmallHeader>{props.date}</SmallHeader>
      <ContentsWrapper>
        <ContentsProfile>
          <ProfileImg src={props.profile}/>
        </ContentsProfile>
        <ContentsNotification>{props.content}</ContentsNotification>
        <ContentsHour>{props.time}</ContentsHour>
      </ContentsWrapper>
    </Wrapper>
  );
}