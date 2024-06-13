import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import styled from "styled-components";
import CommentList from "../list/CommentList";
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

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: rgba(366,366,366,0.5);
    backdrop-filter: blur(3px);
`;

const ModalContainer = styled.div`
    position: absolute;
    width: 780px;
    height: 550px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background: #9494BE;
    border-radius: 10px;
`;

const TopContanier = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 15px 5px 15px;
`;

const CommentText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;

    color: white;
`;

const Line = styled.div`
    margin-left: 6px;
    margin-right: 6px;
    border: 0.5px solid rgba(366, 366, 366, 0.6);
`;

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;    
    height: 80%;
    margin: 5px;
    padding: 10px;
    background-color: rgba(366,366,366,0.7);
    border-radius: 5px;
    align-content: space-between;
`;

const CommentListBox = styled.div`
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: on;
      }
`;

const InputTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    padding: 0 10px 0 6px;
`;

const InputText = styled.input`
    width: 95%;
    height: 28px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 0;
`;

const IconBox = styled.div`
    position: relative;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: white;

    svg{
        position: absolute;
    }
`;

const CommentArray = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 126px;
    height: 22px;

    margin: 4px;
    align-self: end;
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

const CommentPage = ({ closeModal }) => {
    return(
        <Container>
            <Background>
                <ModalContainer>
                    <TopContanier>
                        <CommentText>
                            12 commnets
                        </CommentText>
                        <IoMdCloseCircle 
                            onClick={closeModal}
                            size="26px"
                            color="white"/>
                    </TopContanier>
                    <Line/>
                    <CommentContainer>
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
                    </CommentContainer>
                    <InputTextBox>
                        <InputText/>
                        <IconBox>
                            <FaArrowAltCircleUp size={26} color="#111154"/>
                        </IconBox>  
                    </InputTextBox>
                </ModalContainer>
            </Background>
        </Container>
    );
}

export default CommentPage;
