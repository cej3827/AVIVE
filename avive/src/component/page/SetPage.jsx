import SetProfileImageModal from "../ui/SetProfileIMageModal";
import React, {useState, useRef} from "react";
import SetNameModal from "../ui/SetNameModal";

import styled from "styled-components";
import Header2 from "../ui/Header/Header2";
import { useNavigate } from "react-router-dom";


import { IoPersonCircle } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { FaUserLock } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

const ProfileIcon = styled(IoPersonCircle)`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  display: block;
  margin: auto;
  color: #111154;
`;

const PencilIcon = styled(HiPencil)`
  width: 25px;
  height: 25px;

  position: absolute;
  left: 54%;
  right: 41.95%;
  top: 427px;
  bottom: 43.39%;
  color: #8A8A8A;
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

const Name = styled.div`
  /* ckthdud */

  position: absolute;
  width: 293px;
  height: 42px;
  left: 780px;
  top: 420px;

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

  const onClickToPI = () => {
    navigate(`/SetPersonalInfromation`);
  };

  const onClickToN = () => {
    navigate('/SetNotification');
  };

  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    
  const openNameModal = () => {
      setIsNameModalOpen(true); // 모달 열기
  };

  const closeNameModal = () => {
      setIsNameModalOpen(false); // 모달 닫기
  };

  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const openImgModal = () => {
    setIsImgModalOpen(true);
  };

  const closeImgModal = () => {
    setIsImgModalOpen(false);
  };

  return (
    <div>
      {/* header */}
      <div style={{position:'fixed', display:'block', zIndex:'100', top:0, width:'100%', background:'#ffffff'}}>
        <Header2 />
        <p style={{textAlign:'center', color:'gray', fontSize:'25px', marginTop:'70px'}}>setting</p>
      </div>

      {/* contents 1 */}
      <div style={{display:'grid',alignItems:'center' ,marginTop:'140px'}}>
        <ProfileIcon onClick={openImgModal} /> {/* 클릭 시 모달창 오픈 */}
        <div>
          <Name>ckthdud</Name>
          <PencilIcon onClick={openNameModal}/>
        </div>

      </div>

      {/* contents 2 */}
      <MenuWrapper>
          <LockPerson/>
          <TextBtn style={{ left:'100px', top:'0px' }} onClick={onClickToPI}>personal information</TextBtn>

        <div style={{display:'block', gap:'1rem'}}>
          <BellIcon/>
          <TextBtn style={{ left:'100px', top:'80px' }} onClick={onClickToN}>notification</TextBtn>
        </div>
      </MenuWrapper>

      {isImgModalOpen && <SetProfileImageModal closeModal={closeImgModal}/>}
      {isNameModalOpen && <SetNameModal closeNameModal={closeNameModal} />}
    </div>
  );
}