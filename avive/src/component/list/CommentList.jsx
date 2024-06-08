import React from "react";
import styled from 'styled-components';
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
`;

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin-left: 10px;
`;

const CommentContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px;
`;

const CommentTextStyle = styled.div`
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.04em;
    color: #000000;
    margin: 2px 0 2px 0;
`;

const Number23 = styled.div`
    width: 16px;
    height: 17px;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #000000;
    margin-left: 2px;
`;

const ReplyTextStyle = styled.div`
    width: 38px;
    height: 19px;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: #111154;
`;

const UserIdTextStyle = styled.div`
    height: 14px;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #595959;
`;

const UserImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    margin: 4px;
`;

const ActionBox = styled.div`
    display: flex;
    width: 40px;
    height: 18px;
    margin: 2px;
    align-items: center;
`;

const ActionContainer = styled.div`
    display: flex;
    height: 22px;
`;

function CommentList(props) {
    return (
        <Wrapper>
            <Container>
                <UserImg 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                    />
                <CommentContainer>
                    <CommentContainer1>
                        <UserIdTextStyle>@ {props.name}</UserIdTextStyle>
                        <CommentTextStyle>{props.comment}</CommentTextStyle>
                    </CommentContainer1>
                    <ActionContainer>
                        <ActionBox>
                            <AiFillLike size={16} color="#111154"/>
                            <Number23>23</Number23>
                        </ActionBox>
                        <ActionBox>
                            <AiFillDislike size={16} color="grey"/>
                            <Number23>2</Number23>
                        </ActionBox>
                        <ReplyTextStyle>Reply</ReplyTextStyle>
                    </ActionContainer>
                </CommentContainer>
            </Container>
        </Wrapper>
    );
}

export default CommentList;