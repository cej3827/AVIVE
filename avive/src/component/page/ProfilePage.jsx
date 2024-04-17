import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileInfo from "../ui/ProfileInfo";
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

    const hasChannel = true;

    return (
        <Wrapper>   
            <Header />
            <Container>     
                <ProfileInfo
                    hasChannel={hasChannel}
                    profileImageSrc="프로필 사진 URL"
                    profileName="Jinee's Daily"
                    profileId="@choioio"
                />

            </Container>
        </Wrapper>
    )
}

export default ProfilePage;