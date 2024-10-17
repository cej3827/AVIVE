import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import CommentPage from "../page/CommentPage";
import CommentListItem from "../list/CommentListItem";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";


const CommentContainer = styled.div`
    display: grid;    
    margin: 4px;
    padding: 6px;
    background-color: #F5F5F5;
    border-radius: 10px;
    align-content: space-between;
`;

const TextBox = styled.div`
    display: flex;
    height: 30px;
    margin: 4px 4px 0px 6px;
    border-bottom: 1px solid black;
    justify-content: space-between;
`;

const TextStlye = styled.div`
    margin: 4px;
    color: black;
    font-size: 16px;
    font-weight: bold;
`;

const AllComemntTextStlye = styled.div`
    margin: 5px;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.04em;
    color: #D2BD04;
`;

const InputTextBox = styled.div`
    display: flex;
    height: 34px;
    padding: 2px;
    align-items: center;
    justify-content: space-around;
`;

const InputText = styled.input`
    width: 80%;
    height: 25px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 0;
`;

const CommentArray = styled.div`
    display: flex;
    width: 126px;
    height: 22px;
    margin: 4px;
    justify-self: end;
    justify-content: space-around;
    align-items: center;
    background-color: #767676;
    border-radius: 2px;
`;

const CommentArrayTextStyle = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 2px;
`;

const ModalCss = styled.div`
    position: absolute;
    background-color: red;
    z-index: 999;  
`;

function Comment(props) {
    const {comment} = props;
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setModalOpen(false); // 모달 닫기
    };


    console.log(comment);

    return (
        <CommentContainer>
            <TextBox>
                <TextStlye>
                    12 comments
                </TextStlye>
                <AllComemntTextStlye
                    onClick={openModal}>
                    + View all
                </AllComemntTextStlye>
                {modalOpen &&
                        <ModalCss>
                            <CommentPage closeModal={closeModal}/>
                        </ModalCss>}
            </TextBox>
            <CommentArray>
                <CommentArrayTextStyle>
                    Top Comments
                </CommentArrayTextStyle>
                <FaCaretDown size="13" color="white"/>
            </CommentArray>
            <CommentListItem/>
            <InputTextBox>
                <InputText/>
                <FaArrowAltCircleUp size={24}/>
            </InputTextBox>
        </CommentContainer>
    );
}

export default Comment;