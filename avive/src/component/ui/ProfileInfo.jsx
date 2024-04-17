import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";


//내 채널이 있으면 채널로 이동하는 버튼과, management
// 없으면 채널 만드는 버튼, management 비활성화 
const ProfileInfoContainer = styled.div`
  display: flex;
  position: absolute;
  width: 1000px;
  height: 130px;
  left: 180px;
  top: 120px;
  padding: 40px;
  // border: 1px solid #ccc;
`;

const ProfileImage = styled.img`
  // position: absolute;
  width: 130px;
  height: 130px;
  // left: 23px;
  // top: 100px;
  border-radius: 50%;
  margin-right: 20px;

  background: #D9D9D9;

`;

const Info = styled.div`
    flex-grow: 1;
    margin: 15px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // border: solid 1px;
`;

const ProfileName = styled.div`
    // flex-direction: row;
    margin-bottom: 5px;
    display: flex;
    // align-items: center;
    font-size: 25px;
    // border: solid 1px;
`;

const ProfileId = styled.p`
  margin: 5px 0;
  // padding-bottom: 20px;
  font-size: 18px;
  color: #666;
  // border: solid 1px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

const Button = styled.button`
  display: inline-flex;
  width: 150px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #111154;
  cursor: pointer;
  position: relative;
  font-size: 15px;
  color: #fff;

  /* 비활성화된 버튼 스타일 */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      color: #666;
    `}
`;


function ProfileInfo(props) {
    // const { value, onChange } = props;
    const { hasChannel, profileImageSrc, profileName, profileId } = props;
    const navigate = useNavigate();

    const handleGoToChannel = () => {
      navigate("/my-channel");
    };
  
    const handleCreateChannel = () => {
      // 채널 생성하는 기능 
    };
  
    const handleManageChannel = () => {
      // 채널 관리 기능 
    };

    return (
      <ProfileInfoContainer>
      <ProfileImage src={profileImageSrc} alt="프로필 사진" />
      <Info>
        <ProfileName> 
          {profileName}
        </ProfileName>
        <ProfileId>{profileId}</ProfileId>
        <ButtonContainer>
          {hasChannel ? (
            <>
              <Button onClick={handleGoToChannel}>My Channel</Button>
              <Button onClick={handleManageChannel}>Management</Button>
            </>
          ) : (
            <>
              <Button onClick={handleCreateChannel}>Create Channel</Button>
              <Button disabled>Management</Button>
            </>
          )}
        </ButtonContainer>
      </Info>
    </ProfileInfoContainer>
      );
}

export default ProfileInfo;