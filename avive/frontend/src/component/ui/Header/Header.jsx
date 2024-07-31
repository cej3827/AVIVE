import styled from "styled-components";
import React, { useState } from 'react';
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import SearchBar from "./SearchBar";
import UploadModal from "../UploadModal";
import NotificationListModal from "../NotificationListModal"
import ProfileModal from "../ProfileModal";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 120px;
    padding-bottom: 20px;
    background-color: white;
    z-index: 900;
    right: 0px;
    top: 0px;
    // box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
    // border-bottom-left-radius: 10px;
    // border-bottom-right-radius: 10px;
`;

const Contents = styled.div`
    display: flex;
    width: 96%;
    max-width: 92%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;

const Align = styled.div`
    display: flex;
    width: 10%;
    height: 80%;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const Container = styled.div`
    display: grid;
    margin: 5px;

    p {
        margin-bottom: 8px;
    }
`

const MainTitleText = styled.button`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 800;
    font-size: 38px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #111154;

    background-color: white;
    border: none;
`;

function Header() {
    const navigate = useNavigate();

    const onClickToHome = () => {
        navigate('/Home1');
    };

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가 및 초기화

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    const openProfileModal = () => {
        setIsProfileModalOpen(true);
    };

    const closeProfileModal = () => {
        setIsProfileModalOpen(false);
    };

    const openNotificationModal = () => {
        setIsNotificationModalOpen(true);
    };

    const closeNotificationModal = () => {
        setIsNotificationModalOpen(false);
    };

    return (
        <Wrapper>
            <Contents>
                <Align></Align>

                <Container>
                    <MainTitleText onClick={onClickToHome}>
                        aVive
                    </MainTitleText>
                    <SearchBar/>
                </Container>
                
                <Align>
                    <BiSolidVideoPlus className="icon" size="30" color="#111154" onClick={openModal}/>
                    <MdNotifications className="icon" size="30" color="#111154" onClick={openNotificationModal}/>
                    <BiSolidUserCircle className="icon" size="30" color="#111154" onClick={openProfileModal}/>    
                </Align>
            </Contents>
            {isModalOpen && <UploadModal closeModal={closeModal} />}
            {isNotificationModalOpen && <NotificationListModal closeNotificationModal={closeNotificationModal}/> }
            {isProfileModalOpen  && <ProfileModal closeProfileModal={closeProfileModal}/>}
        
        </Wrapper>
    );
}

export default Header;