import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityItem from './CommunityItem';
import { BsPlusCircleFill } from "react-icons/bs";
import CommunityModal from '../ui/CommunityModal';


const CommunityListWrapper = styled.div`
  // max-width: 600px;
//   margin: 0 auto;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
  margin: 16px 0;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 30px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
`;

const CancelButton = styled.button`
  align-items: center;
  font-size: 15px;
  border: none;
  background-color: #B3B3C2;
  border-radius: 8px;
  padding: 7px 20px;
  height: 32px;
  cursor: pointer;
`;

const PostButton = styled.button`
  align-items: center;
  font-size: 15px;
  border: none;
  background-color: #111154;
  color: #fff;
  padding: 7px 30px;
  border-radius: 8px;
  margin-left: 5px;
  height: 32px;
  cursor: pointer;
`;

const CommunityList = ({ communities }) => {
  const isOwnChannel = true;
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가 및 초기화
  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };
  
  return (
    <CommunityListWrapper>
      {/* <IconWrapper>
        {isOwnChannel ? <BsPlusCircleFill /> : null}
      </IconWrapper> */}
      <IconWrapper>
        {isOwnChannel && <BsPlusCircleFill onClick={openModal} />} {/* 클릭 시 모달 열기 */}
      </IconWrapper>
      {communities.map((community, index) => (
        <React.Fragment key={index}>
          <CommunityItem
            isOwnChannel={isOwnChannel}
            profileImage={community.profileImage}
            channelName={community.channelName}
            postTime={community.postTime}
            content={community.content}
          />
          {index !== communities.length - 1 && <Divider />}
        </React.Fragment>
      ))}
      <CommunityModal isOpen={isModalOpen} onRequestClose={closeModal}>
        {/* <CancelButton onClick={closeModal}>Cancel</CancelButton>
        <PostButton>Post</PostButton> */}
        <ButtonContainer>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <PostButton>Post</PostButton>
          {/* //posting 하는 동작,,,,  */}
        </ButtonContainer>
      </CommunityModal>
    </CommunityListWrapper>
  );
};

export default CommunityList;
