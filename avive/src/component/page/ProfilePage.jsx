import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChannelInfo from "../ui/ChannelInfo";
import TabBar from "../ui/TabBar";
import Header from "../ui/Header/Header";
import SubscriptionButton from "../ui/SubscribeButton";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function ProfilePage(props) {
    const {} = props;

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const isOwnChannel = true;

    return (
        <Wrapper>   
            <Header />
        </Wrapper>
    )
}

export default ProfilePage;