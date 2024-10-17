import React, {useState, useRef} from "react";
import SetNameModal from "../ui/SetNameModal";
import SetProfileImageModal from "../ui/SetProfileIMageModal";

import SetPersonalInformation from "./SetPersonalInformationPage";
import SetNotification from "./SetNotificationPage";

import styled from "styled-components";
import Header2 from "../ui/Header/Header2";
import { useNavigate } from "react-router-dom";


import { IoPersonCircle } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FaUserLock } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

const Wrapper = styled.div`
  position:fixed;
  width: 100%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
  /* margin-top:120px;
  margin-left:70px; */

  body{
    -ms-overflow-style: none;
  }
 
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileIcon = styled(IoPersonCircle)`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  display: block;
  margin: 7% 46% auto auto;
  color: #111154;
  cursor: pointer;
`;

const PencilIcon = styled(HiPencil)`
  width: 25px;
  height: 25px;
  position: relative;
  margin: 2.5% 30% auto 50%;
  color: #8A8A8A;
  cursor: pointer;
`;

const TextBtn = styled.button`
  position:absolute;
  font-size: 30px;
  color: #111154;
  font-family: 'Jockey One';
  white-space: nowrap;
  border: none;
  background-color: white;
  font-weight: 900; /* bold와 같음 */
  cursor: pointer;

`;

const LockPerson = styled(FaUserLock)`
  position: absolute;
  width: 40px;
  height: 40px;
  left:30px;
  top:0px;
  color: #111154;
  white-space: nowrap;
`;

const BellIcon = styled(FaRegBell)`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 30px;
  top: 80px;
  color: #111154;
  white-space: nowrap;
`;

// 수정필요 : 텍스트가 중간에 위치하도록 (텍스트 길이가 늘어나면 끝부분에 추가만 되고 위치 그대로임)
const Name = styled.div`
  /* ckthdud */

  position: absolute;
  width: 250px;
  height: 42px;
  margin-top: 2%;
  margin-left: 41%;
  margin-right:45%;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

`;

const MenuWrapper = styled.div`
  position: absolute;
  width: 524px;
  height: 141.15px;
  left: 600px;
  top: 600px;
`;

export default function Set() {
  const navigate = useNavigate();

  const onClickToPersonal = () => {
    navigate(`/SetPersonalInformation`);
  };

  const onClickToNotification = () => {
    navigate('/SetNotification');
  };

  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const openImgModal = () => {
    setIsImgModalOpen(true);
  };

  const closeImgModal = () => {
    setIsImgModalOpen(false);
  };

  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    
  const openNameModal = () => {
      setIsNameModalOpen(true); // 모달 열기
  };

  const closeNameModal = () => {
      setIsNameModalOpen(false); // 모달 닫기
  };

  return (
    <Wrapper>
      {/* header */}
      <div>
        <Header2 />
        {/* <p style={{textAlign:'center', color:'gray', fontSize:'25px', marginTop:'70px'}}>setting</p> */}
      </div>

      {/* contents 1 */}
      <div>
        <ProfileIcon onClick={openImgModal} /> {/* 클릭 시 모달창 오픈 */}
        <div>
          {/* Name 태그 : 추후에 DB 연결하면 로그인된 사용자 정보 읽어와야 됨 */}
          <Name>ckthdud</Name>
          <PencilIcon onClick={openNameModal}/>
        </div>
      </div>

      {/* contents 2 */}
      <MenuWrapper>
        <div>
          <LockPerson/>
          <TextBtn style={{ left:'100px', top:'0px' }} onClick={onClickToPersonal}>personal information</TextBtn>
        </div>

        <div style={{display:'block', gap:'1rem'}}>
          <BellIcon/>
          <TextBtn style={{ left:'100px', top:'80px' }} onClick={onClickToNotification}>notification</TextBtn>
        </div>
      </MenuWrapper>

      {isImgModalOpen && <SetProfileImageModal closeModal={closeImgModal}/>}
      {isNameModalOpen && <SetNameModal closeNameModal={closeNameModal} />}

    </Wrapper>
  );
}