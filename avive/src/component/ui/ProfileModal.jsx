import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { IoPersonSharp } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import LogoutModal1 from "./LogoutModal1";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PersonIcon = styled(IoPersonSharp)`
  /* Account */

  position: absolute;
  width: 37.87px;
  height: 37.87px;
  left: 18.94px;
  top: 78.27px;
  color: #111154;

`;


const ProfileImg = styled.div`
  position: absolute;
  width: 37.87px;
  height: 37.87px;
  left: 18.94px;
  top: 23px;

  background-image: ("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png");
`;

const ChannelIcon = styled(MdVideoLibrary)`
    /* Video Playlist */

  position: absolute;
  width: 37.87px;
  height: 37.87px;
  left: 18.94px;
  top: 126.24px;
  color: #111154;

`;

const SetIcon = styled(IoMdSettings)`
  /* Vector */

  position: absolute;
  left: 18.94px;
  right: 76.64%;
  top: 174.21px;
  width: 37.87px;
  height: 37.87px;
  color: #111154;

`;

const Wrapper = styled.div`
  
  /* Rectangle 59 */
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 220.92px;
  height: 270px;
  top: 60px;
  left: 1380px;

  background: #FFFFFF;
  border-radius: 25px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`;

const Header = styled.div`
  /* Group 186 */

  position: absolute;
  width: 175.47px;
  height: 44.97px;
  left: 18.94px;
  top: 5.67px;

`;

const HeaderName = styled.div`
  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 68.17px;
  top: 17.67px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const HeaderId = styled.div`
  /* @soy */

  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 69.43px;
  top: 40.4px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  /* identical to box height */

  color: #7d7d7d;

`;

const MenuText = styled.button`
  /* my profile */

  position: absolute;
  width: 124.98px;
  height: 35.56px;
  left: 73px;
  top: 77.31px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;

  color: #000000;
  border: none;
  background-color: white;

`;

const LogoutBtn = styled.button`
  /* log out */

  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 49.97px;
  top: 227.7px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;

  color: #7d7d7d;
  background-color: white;
  border: none;
`;


const ProfileModal = ({closeProfileModal}) => {
  
  const navigate = useNavigate();

  const onClickToMyProfile = () => {
    navigate('/my-profile');
  };

  const onClickToMyChannel = () => {
    navigate('/my-channel');
  };

  const onClickToSetPage = () => {
    navigate('/Set');
  };

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    
  const openLogoutModal = () => {
      setIsLogoutModalOpen(true); // 모달 열기
  };

  const closeLogoutModal = () => {
      setIsLogoutModalOpen(false); // 모달 닫기
  };

  return(
      <Outer onClick={closeProfileModal}>
        <Wrapper onClick={(e) => e.stopPropagation()}>
          {/*Header*/}
          <Header>
            {/* <HeaderImg>
              <PersonIcon/>
            </HeaderImg> */}
            <ProfileImg>
              
            </ProfileImg>
            <HeaderName>ckthdud</HeaderName>
            <HeaderId>@soy</HeaderId>
          </Header>

          {/*Menu*/}
          <div onClick={onClickToMyProfile}>
            <PersonIcon/>
            <MenuText>my profile</MenuText>
          </div>
          <div onClick={onClickToMyChannel}>
            <ChannelIcon/>
            <MenuText style={{ top:'126.21px' }}>my channel</MenuText>
          </div>
          <div onClick={onClickToSetPage}>
            <SetIcon/>
            <MenuText style={{ top:'174.16px' }}>setting</MenuText>
          </div>

          {/*log out button*/}
          <LogoutBtn onClick={openLogoutModal}>log out</LogoutBtn>
        </Wrapper>
        {isLogoutModalOpen && <LogoutModal1 closeLogoutModal={closeLogoutModal} />}
      </Outer>
  );
};


export default ProfileModal;