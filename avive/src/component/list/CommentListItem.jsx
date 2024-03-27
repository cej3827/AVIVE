import React from "react";
import CommentList from "./CommentList";
import styled from "styled-components";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const comments = [
    {
        name: "신혜혜",
        comment: "나의 첫 번째 댓글 :)\n나의 첫 번째 댓글 :)\n나의 첫 번째 댓글 :)"
    },
    {
        name: "차차소", 
        comment: "oh my god!!!!! amazing!!!!"
    },
    {
        name: "최최은진진자라",
        comment: "농담곰 귀여워."
    },
    {
        name: "신혜혜",
        comment: "나의 첫 번째 댓글 :)\n나의 첫 번째 댓글 :)\n나의 첫 번째 댓글 :)"
    },
    {
        name: "차차소", 
        comment: "oh my god!!!!! amazing!!!!"
    },
    {
        name: "최최은진진자라",
        comment: "농담곰 귀여워."
    }
];

const CommentContainer = styled.div`
    display: grid;    
    margin: 4px;
    padding: 6px;
    background-color: #F5F5F5;
    border-radius: 10px;
    align-content: space-between;
`;

const CommentListBox = styled.div`
    height: 294px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
      }
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

function CommentListItem(props) {
    return (
        <CommentContainer>
            <TextBox>
                <TextStlye>
                    12 comments
                </TextStlye>
                <AllComemntTextStlye>
                    + View all
                </AllComemntTextStlye>
            </TextBox>
            <CommentArray>
                <CommentArrayTextStyle>
                    Top Comments
                </CommentArrayTextStyle>
                <FaCaretDown size="13" color="white"/>
            </CommentArray>
            <CommentListBox>
                {comments.map((comment) => {
                    return (
                        <CommentList name={comment.name} comment={comment.comment} />
                    );
                })}
            </CommentListBox>
            <InputTextBox>
                <InputText/>
                <FaArrowAltCircleUp size={24}/>
            </InputTextBox>
        </CommentContainer>
    );
}

export default CommentListItem;