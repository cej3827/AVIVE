import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {useNavigate, useLocation} from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AVIVETITLE = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 78px;
    letter-spacing: 0.04em;
    color: #111154;
`;

const BackContanier = styled.div`
    width: 470px;
    height: 384px;

    background: rgba(17, 17, 84, 0.06);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const FrontContanier = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(17, 17, 84, 0.14);
    border-radius: 0px 2px 10px 10px;
`;

const TabWapper = styled.div`
    width: 100%;
    height: 12%;
    display: flex;
`;

const TabContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ "data-active": dataActive }) =>
        dataActive === "true" ? "rgba(17, 17, 84, 0.14)" : "transparent"};
    border-radius: 10px 10px 0px 0px;
`;


const MainText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.04em;

    color: rgba(17, 17, 84, 0.8);
`;

const InputText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 0.04em;

    color: rgba(17, 17, 84, 0.8);
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 360px;
    height: 38px;

    outline: none;

    background: #FFFFFF;
    border: 0;
    border-bottom: 1.5px solid rgba(17, 17, 84, 0.8);
    padding-left: 10px;
`;

const CheckInfoButton = styled.div`
    width: 360px;
    height: 40px;

    background: #111154;
    border: 1.2px solid #111154;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    margin-top: 20px;

    && {
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.04em;
        color: white;
        text-align: center;
        line-height: 35px;
    }
`;

const TextBox = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
`;

const PhoneInputBox = styled.div`
    width: 360px;
    height: 38px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PhoneButton = styled.div`
    width: 20%;
    height: 95%;

    background: #4E4E7B;
    border: 1.2px solid #111154;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    && {
        color: white;
        text-align: center;
        line-height: 30px;
    }
`;

const PhoneInput = styled.input`
    box-sizing: border-box;
    width: 80%;
    height: 100%;

    outline: none;

    background: #FFFFFF;
    border: 0;
    border-bottom: 1.5px solid rgba(17, 17, 84, 0.8);
    padding-left: 10px;
`;

function FindPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const page = (location.state === null ? null : location.state.page);


    const TabData = [
        { id: 0, button: "FIND ID", content: "ID" },
        { id: 1, button: "FIND PASSWORD", content: "Password" },
    ];

    const [activeTab, setActiveTab] = useState(TabData[0].id);

    useEffect(()=>{
        if(page == null){
            setActiveTab(TabData[0].id);
        }
        else{
            setActiveTab(page);
        };
    },[page]);
    
    const IDContent = () => (
        <InputBox>
            <TextBox>
                <InputText>Name</InputText>
            </TextBox>
            <Input/>
            <TextBox>
                <InputText>phone Number</InputText>
            </TextBox>
            <PhoneInputBox>
                <PhoneInput/>
                <PhoneButton>transmit</PhoneButton>
            </PhoneInputBox>
            <TextBox>
                <InputText>Certification Number</InputText>
            </TextBox>
            <Input/>
        </InputBox>
    );

    const PasswordContent = () => (
        <InputBox>
            <TextBox>
                <InputText>ID</InputText>
            </TextBox>
            <Input/>
            <TextBox>
                <InputText>phone Number</InputText>
            </TextBox>
            <PhoneInputBox>
                <PhoneInput/>
                <PhoneButton>transmit</PhoneButton>
            </PhoneInputBox>
            <TextBox>
                <InputText>Certification Number</InputText>
            </TextBox>
            <Input/>
        </InputBox>
    );

    return(
        <Wrapper>
            <AVIVETITLE>AIVIVE</AVIVETITLE>
            <BackContanier>
                <TabWapper>
                    {TabData.map((tab) => (
                        <TabContainer
                            key={tab.id}
                            data-active={activeTab === tab.id ? "true" : "false"}
                            onClick={() => setActiveTab(tab.id)}>
                            <MainText>
                                {tab.button}
                            </MainText>
                        </TabContainer>
                        ))}
                </TabWapper>
                <FrontContanier>
                    { TabData[activeTab].content === "ID" && <IDContent/> }
                    { TabData[activeTab].content === "Password" && <PasswordContent/> }
                    <CheckInfoButton
                        onClick={() => {
                            navigate(`/FindPage/2`,
                            { state : {page:  TabData[activeTab].id}});
                        }}
                    >CHECK</CheckInfoButton>
                </FrontContanier>
            </BackContanier>
        </Wrapper>
    );
}

export default FindPage;