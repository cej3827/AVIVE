import React from "react";
import { useState } from "react";
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
    justify-content: space-between;

    background: rgba(17, 17, 84, 0.14);
    border-radius: 0px 2px 10px 10px;

    div {
        margin: 30px 0 30px 0;
    }
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
    width: 70%;

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

const CheckButton = styled.div`
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


function FindPage1() {
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.state.page;
    
    const TabData = [
        { id: 0, button: "FIND ID", content: "ID" },
        { id: 1, button: "FIND PASSWORD", content: "Password" },
    ];

    const [activeTab, setActiveTab] = useState(page);

    const IDContent = () => (
        <InputText>
            Name 님의 ID
        </InputText>
    );

    const PasswordContent = () => (
        <InputText>
            Name 님의 Password
        </InputText>
    );

    function increase(number) {
        const promise = new Promise((resolve, reject) => {
            setTimeout (() => {
                const result = number;
                if(result > 50){
                    // 50보다 높으면 에러 발생
                    const e = new Error("NumberTooBig");
                    return reject(e);
                }
                resolve(result);  // number 값에 + 10 후 성공 처리
            }, 100);
        });
        return promise;
    }

    return(
        <Wrapper>
            <AVIVETITLE>AIVIVE</AVIVETITLE>
            <BackContanier>
                <TabWapper>
                    {TabData.map((tab) => (
                        <TabContainer
                            key={tab.id}
                            data-active={activeTab === tab.id ? "true" : "false"}
                            onClick={async() => {
                                await increase();
                                setActiveTab(tab.id);
                                if(activeTab != tab.id){
                                    navigate('/FindPage/1', { state : {page: tab.id} });
                                }
                            }}>
                            <MainText>
                                {tab.button}
                            </MainText>
                        </TabContainer>
                        ))}
                </TabWapper>
                <FrontContanier>
                    { TabData[activeTab].content === "ID" && <IDContent/> }
                    { TabData[activeTab].content === "Password" && <PasswordContent/> }
                    <CheckButton
                        onClick={() => {
                            navigate(`/login`);
                        }}
                    >OK</CheckButton>
                </FrontContanier>
            </BackContanier>
        </Wrapper>
    );
}

export default FindPage1;