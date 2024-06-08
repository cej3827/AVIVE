import React from "react";
import CommentList from "./CommentList";
import styled from "styled-components";


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


const CommentListBox = styled.div`
    height: 294px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: on;
      }
`;


function CommentListItem(props) {
    const {comment} = props;

    return (
        <CommentListBox>
            {comments.map((comment) => {
                return (
                    <CommentList name={comment.name} comment={comment.comment} />
                );
            })}
        </CommentListBox>
    );
}

export default CommentListItem;