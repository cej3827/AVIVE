import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

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

const LoginContainer = styled.div`
    width: 470px;
    height: 384px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(17, 17, 84, 0.06);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

const LoginBox = styled.div`
    width: 100%;
    height: 88%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin-top: 10px
`;

const Line = styled.div`
    width: 440px;
    border: 1px solid rgba(0, 0, 0, 0.15);
`;

const InputBox = styled.input`
    box-sizing: border-box;
    width: 360px;
    height: 38px;

    outline: none;

    background: #FFFFFF;
    border: 0;
    border-bottom: 1.5px solid rgba(17, 17, 84, 0.8);
    padding-left: 10px;

    &::placeholder{
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.04em;
        color: rgba(17, 17, 84, 0.4);
    }
`;

const LoginErrorText = styled.div`
    width: 360px;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;

    color: #EB0000;
`;

const LoginButton = styled.div`
    width: 360px;
    height: 40px;

    background: #111154;
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

const LoginFindContainer = styled.div`
    width: 360px;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

const LoginFindText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;

    margin-left: 30px;
    color: #747474;
`;

const KakaoLogin = styled.div`
    box-sizing: border-box;
    width: 360px;
    height: 42px;

    background: #F1D900;
    border: 1.2px solid #F1D900;
    border-radius: 4px;

    && {
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.04em;

        color: #000000;
    }
`;

const CreateLoginUser = styled.div`
    box-sizing: border-box;
    width: 360px;
    height: 42px;
    
    background: #7D7DA7;
    border: 1.2px solid #7D7DA7;
    border-radius: 4px;

    && {
        font-family: 'Alata';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;
    }
`;

function LoginPage() {
    const navigate = useNavigate();

    return(
        <Wrapper>
            <AVIVETITLE>AIVIVE</AVIVETITLE>
            <LoginContainer>
                <LoginBox>
                    <InputBox type='text' placeholder="ID"/>
                    <InputBox type='text' placeholder="Password"/>
                    <LoginErrorText>*ID/Password is wrong</LoginErrorText>
                    <LoginButton
                        onClick={() => {
                            navigate(`/video`);
                        }}
                    >login</LoginButton>
                    <LoginFindContainer>
                        <LoginFindText>Forget ID</LoginFindText>
                        <LoginFindText>Forget Password</LoginFindText>
                    </LoginFindContainer>
                    <Line/>
                    <KakaoLogin>kakao login</KakaoLogin>
                    <CreateLoginUser
                        onClick={() => {
                            navigate(`/join/1`);
                        }}
                    >Join</CreateLoginUser>
                </LoginBox>
            </LoginContainer>
        </Wrapper>
    );
}

export default LoginPage;