import React from "react";
import styled from "styled-components";
import { IoPersonCircle } from "react-icons/io5"; {/* 프로필 이미지 */}
import { IoChevronBackSharp } from "react-icons/io5"; {/*back 버튼*/}


const Wrapper = styled.div`
  /* set_profile_image */

  position: relative;
  width: 600px;
  height: 600px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
`;

const Header = styled.div`
  /* Group 179 */

  position: absolute;
  width: 600px;
  height: 56.56px;
  left: -0.05px;
  top: 0px;
`;

const Hr = styled.hr`
  /* Line 6 */

  position: absolute;
  width: 600px;
  height: 0px;
  left: -0.05px;
  top: 56.56px;

  border: 0.5px solid #B7B7B7;

`;


const BackIcon = styled(IoChevronBackSharp)`
  /* Arrow back ios */

  position: absolute;
  width: 25px;
  height: 29.12px;
  left: 27px;
  top: 11.65px;

`;

const ProfileImage = styled(IoPersonCircle)`
  /* Account circle */

  position: absolute;
  width: 300px;
  height: 300px;
  left: 150px;
  top: 87px;

`;

const ModalTitle = styled.div`
  /* Group 18 */

  position: absolute;
  width: 425.95px;
  height: 44.97px;
  left: 86px;
  top: 0px;

`;


const Button = styled.button`
  /* Rectangle 54 */

  position: absolute;
  width: 205px;
  height: 48px;
  left: 197px;
  top: 427px;

  background: #EFEFEF;
  border-radius: 20px;
  text-align: center;
`;

export default function SetProfileImageModal (){

  return (
    <Wrapper className>
      {/* Header */}
      <Header>
        <BackIcon/>
        <ModalTitle>profile image</ModalTitle>
        <Hr/>
      </Header>

      {/* Contents */}
      <ProfileImage/>
      <Button> basic image </Button>
      <Button> upload </Button>
    </Wrapper>
  );
}
