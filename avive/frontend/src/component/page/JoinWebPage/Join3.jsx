import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { MdAddBox } from "react-icons/md";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: end;
`;

const AVIVETITLE = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    letter-spacing: 0.04em;
    color: #111154;
`;

const JOINTITLE = styled.div`
    margin-left: 20px;
    font-family: 'K2D';
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 0.04em;
    color: #111154;
`;

const JoinContainer = styled.div`
    width: 470px;
    height: 384px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(17, 17, 84, 0.06);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const JoinBox = styled.div`
    width: 100%;
    height: 88%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const TextBox = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
`;

const IDText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
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

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginButton = styled.div`
    width: 360px;
    height: 40px;
    margin-top: 6px;
    
    background: lightgrey;
    border: 1.2px solid lightgrey;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    && {
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.04em;
        color: black;
        text-align: center;
        line-height: 35px;
    }
`;

const SelfButton = styled.div`
    width: 360px;
    height: 40px;

    background-color: #111154;
    border: 1.2px solid #111154;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

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

function Join3() {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <TitleContainer>
                <AVIVETITLE>AVIVE</AVIVETITLE>
                <JOINTITLE>JOIN</JOINTITLE>
            </TitleContainer>
            <JoinContainer>
                <JoinBox>
                    <InputBox>
                        <TextBox>
                            <IDText>profile Name</IDText>
                        </TextBox>
                        <Input/>
                        <TextBox>
                            <IDText>profile Photo</IDText>
                        </TextBox>
                        <MdAddBox size={110} color="#111154"/>
                    </InputBox>
                    <ButtonBox>
                        <SelfButton
                            onClick={() => {
                                navigate(`/login`);
                            }}
                        >Self Certification</SelfButton>
                        <LoginButton
                            onClick={() => {
                                navigate(`/login`);
                            }}
                        >login</LoginButton>
                    </ButtonBox>
                </JoinBox>
            </JoinContainer>
        </Wrapper>
    );
}

export default Join3;