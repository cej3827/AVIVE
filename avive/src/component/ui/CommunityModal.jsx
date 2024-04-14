import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  height: 500px;
  overflow-y: auto; /* 내용이 모달보다 길 경우 스크롤 표시 */
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 90%;
  margin-top: -20px;
`;

const ProfileImageWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: 30px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const PostContentTextarea = styled.textarea`
  width: 90%;
  height: 240px; /* Adjusted height */
  resize: none; 
  border: none;
  outline: none;
  padding: 10px;
  margin-left: 25px; 
  font-size: 18px;
`;


const CommunityModal = ({ isOpen, onRequestClose, children}) => {
  // 모달이 열려 있지 않으면 null 반환
  if (!isOpen) return null;

  const profileImageUrl = "data:image/png;base64,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"
  
  return (
    <ModalWrapper onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitleWrapper>
          <h2>Posting</h2>
        </ModalTitleWrapper>
        <Divider />
        <ProfileImageWrapper>
          <ProfileImage src={profileImageUrl}/>
        </ProfileImageWrapper>
        <PostContentTextarea placeholder="Enter your post content..." />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default CommunityModal;
