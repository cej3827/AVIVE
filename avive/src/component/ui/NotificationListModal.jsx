import React from "react";
import styled from "styled-components";

import { IoMdSettings } from "react-icons/io";

const Wrapper = styled.div`
  /* list_notification */

  position: relative;
  width: 400px;
  height: 650px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

`;

const ListWrapper = styled.div`
  /* Frame 12 */

  position: absolute;
  width: 400px;
  height: 566px;
  left: 0px;
  top: 71px;
  overflow-y: scroll;


`;

const Header = styled.div`
  /* Group 181 */

  position: absolute;
  width: 400px;
  height: 55px;
  left: 0px;
  top: 0px;


`;

const HeaderTitle = styled.div`
  /* Group 12 */

  position: absolute;
  width: 135px;
  height: 29.36px;
  left: 125px;
  top: 13px;

`;

const SetIcon = styled(IoMdSettings)`
  /* Settings */

  position: absolute;
  width: 17px;
  height: 17px;
  left: 372px;
  top: 22px;

`;

const SmallHeader = styled.div`
  /* Group 183 */

  position: absolute;
  width: 372px;
  height: 29.36px;
  left: 17px;
  top: 0px;

`;

const NotificationContents = styled.div`
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

const ContetnsProfile = styled.div`
  /* Vector */

  position: absolute;
  width: 27.5px;
  height: 28.33px;
  left: 17px;
  top: 52px;

`;

export default function NotificationListModal(props){
  return(
    <Wrapper>
      <Header>
        <HeaderTitle>notification</HeaderTitle>
        <SetIcon/>
      </Header>


    </Wrapper>
  );
}