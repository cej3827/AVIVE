import React, {useRef} from "react";
import styled from "styled-components";
import NotificationListModalItem from "./NotificationListModalItem";

import { IoMdSettings } from "react-icons/io";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* list_notification */

  position: absolute;
  width: 400px;
  height: 650px;
  top: 60px;
  left: 1150px;

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
  left: 160px;
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

const items = [
  {date:"Today", profile:"", content:"", time:""},
];

const NotificationListModal = ({closeNotificationModal}) => {

  return(
    <Outer onClick={closeNotificationModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderTitle>notification</HeaderTitle>
          <SetIcon/>
        </Header>

        <ListWrapper>
          {items.map((item) => <NotificationListModalItem date={item.title} profile={item.profile} content={item.content} time={item.content} />)}
        </ListWrapper>
      </Wrapper>
    </Outer>

  );
};

export default NotificationListModal;