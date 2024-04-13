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

function ChannelPage(props) {
    const {} = props;

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); 
    const isOwnChannel = true;

    return (
        <Wrapper>   
            <Header />
            <Container>     
                <TabBar>
                </TabBar>
                <ChannelInfo
                    isOwnChannel={isOwnChannel}
                    profilePictureSrc="프로필 사진 URL"
                    channelName="Jinee's Daily"
                    subscriberCount="Subscriber 120k"
                    channelId="@choioio"
                    channelIntro="hi im hacher"
                    button={<SubscriptionButton />} // SubscribeButton 대신 ProfileButton을 전달하면 프로필 버튼으로 대체
                />

            </Container>
        </Wrapper>
    )
}

export default ChannelPage;