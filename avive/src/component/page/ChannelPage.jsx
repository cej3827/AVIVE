import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import List from "../list/CommunityList";
import ChannelInfo from "../ui/ChannelInfo";
import TabBar from "../ui/TabBar";
import data from '../../data.json';
import Header from "../ui/Header";


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

    return (
        <Wrapper>   
            <Header></Header> 
            <Container>     
                <TabBar>
                </TabBar>
                <ChannelInfo
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

            </Container>
        </Wrapper>
    )
}

export default ChannelPage;