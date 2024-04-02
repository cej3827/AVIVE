import React from "react";
import styled from "styled-components";
import { MdNotifications } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import WatchSubscribeButton from "./WatchSubscribeButton"


const Styles = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    text {
        padding-left: 10px;
    }
`;

const UserImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 25px;
`;

const UserName = styled.text`
    color: black;
    font-size: 16;
    font-weight: bold;
    text-align: center;
`;

const NotificationBox = styled.div`
    width: 46px;
    height: 28px;
    display: flex;
    margin-right: 18px;
    padding-right: 2px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid grey;
    border-radius: 16px;
`;

function UserInfo(props) {
    return (
        <Styles>
            <div style={{display:"flex", alignItems: "center"}}>
                <UserImg 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                />
                <UserName>hhhhey!</UserName>
            </div>
            <WatchSubscribeButton/>
            {/* <NotificationBox>
                <MdNotifications className="icon" size="25" color="F1D900"/> 
                <FaCaretDown size="13" color="grey"/>
            </NotificationBox> */}
        </Styles>     
    );
}

export default UserInfo;