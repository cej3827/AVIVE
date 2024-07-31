import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import Modal from "./Modal";


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
    height: 80%;

    position: relative;

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

const InputContainer = styled.div`
    width: 360px;
    position: relative;

    div {
        position: absolute;
        right: 10px;
        top: 8px;
    }
`;

const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 360px;
    height: 40px;

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

const ErrorText = styled.div`
    width: 360px;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;

    color: #EB0000;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;

    div {
        top: 40px;
        right: 0px;
    }
`;

const InfoText = styled.div`
    position: absolute;
    width: 164px;

    z-index: 1;

    background: #FFFFFF;
    border: 0.4px solid #111154;
    border-radius: 10px;

    padding-left: 6px;

    && {
        font-family: 'Alata';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
        text-align : start;
        color: #111154;
        border: 0.2px solid #111154;
    }
`;

const ModalCss = styled.div`
    position: absolute;
    z-index: 999;
`;

function Join2() {
    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const CKpasswordRef = useRef(null);

    const [infoState, setinfoState] = useState(false);
    const [isShowPwChecked, setShowPwChecked] = useState(false)
    const [isShowPwChecked1, setShowPwChecked1] = useState(false)

    const [pwValue, setPw] = useState();
    const [pwChValue, setPwCh] = useState();

    const [modalOpen, setModalOpen] = useState(false);

    function onChangePw(event){
        setPw(event.target.value);
    }

    function onChangePwCh(event){
        setPwCh(event.target.value);
    }

    const handlePwChecked = () => {
        if(pwValue != null && pwChValue != null && pwValue == pwChValue){
            navigate(`/join/3`);   
        }
        else{
            setModalOpen(true);
        }
    }

    const handleShowPwChecked = () => {
        const password = passwordRef.current
        if (password === null) return
      
        setShowPwChecked(!isShowPwChecked)
        if(!isShowPwChecked) {
          password.type = 'text';
        }
        else {
          password.type = 'password';
        }
    }

    const IconBox = () => {
        if(!isShowPwChecked){
            return(
                <div>
                    <IoEyeSharp 
                        size={20} color="#111154"
                        onClick={()=>handleShowPwChecked()}/>
                </div>
            );
        }
        else{
            return(
                <div>
                    <IoEyeOff 
                        size={20} color="#111154"
                        onClick={()=>handleShowPwChecked()}/>
                </div>
            );
        }
    }

    const handleShowPwChecked1 = () => {
        const CKpassword = CKpasswordRef.current
        if (CKpassword === null) return
      
        setShowPwChecked1(!isShowPwChecked1)
        if(!isShowPwChecked1) {
          CKpassword.type = 'text';
        }
        else {
          CKpassword.type = 'password';
        }
    }
    
    const IconBox1 = () => {
        if(!isShowPwChecked1){
            return(
                <div>
                    <IoEyeSharp 
                        size={20} color="#111154"
                        onClick={()=>handleShowPwChecked1()}/>
                </div>
            );
        }
        else{
            return(
                <div>
                    <IoEyeOff 
                        size={20} color="#111154"
                        onClick={()=>handleShowPwChecked1()}/>
                </div>
            );
        }
    }

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
                            <IDText>Password</IDText>
                            <InfoBox>
                                <FaCircleInfo 
                                    size={18} color={infoState !== true ? "#111154" : "grey"}
                                    onClick={()=>{
                                        setinfoState(!infoState);
                                        console.log(infoState);
                                    }}
                                />
                                {infoState && 
                                    <InfoText> 12자 이상 영어, 숫자, 특수 문자를
                                    사용하여 생성해주세요. (!,@,#,$,%,^,&)</InfoText>}
                            </InfoBox>
                        </TextBox>
                        <InputContainer>
                            <Input 
                                type='password' 
                                onChange={onChangePw}
                                ref={passwordRef}/>
                            <IconBox/>
                        </InputContainer>
                        <TextBox>
                            <IDText>check Password</IDText>
                        </TextBox>
                        <InputContainer>
                            <Input
                                type='password'  
                                onChange={onChangePwCh}
                                ref={CKpasswordRef}/>
                            <IconBox1/>
                        </InputContainer>
                        <ErrorText>*Password is different</ErrorText>
                    </InputBox>
                    <LoginButton
                         onClick={() => {
                            handlePwChecked();
                            console.log(modalOpen);
                        }}>next
                    </LoginButton>
                    {modalOpen &&
                        <ModalCss onClick={()=>{
                            setModalOpen(false);
                        }}>
                            <Modal/>
                            </ModalCss>}
                </JoinBox>
            </JoinContainer>
        </Wrapper>
    );
}

export default Join2;