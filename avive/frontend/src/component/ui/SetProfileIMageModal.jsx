import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
// import { IoChevronBackSharp } from "react-icons/io5"; {/*back 버튼*/}
import { IoIosClose } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5"; {/* 프로필 이미지 */}

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* set_profile_image */

  position: relative;
  width: 600px;
  height: 600px;
  z-index: 2;

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


// const BackIcon = styled(IoChevronBackSharp)`
//   /* Arrow back ios */

//   position: absolute;
//   width: 25px;
//   height: 29.12px;
//   left: 27px;
//   top: 11.65px;

// `;

const ProfileImage = styled(IoPersonCircle)`
  /* Account circle */ 

  position: absolute;
  width: 300px;
  height: 300px;
  left: 150px;
  top: 87px;

`;

const CloseIcon = styled(IoIosClose)`

  position: absolute;
  width: 25px;
  height: 29.12px;
  left: 554px;
  top: 10px;
`;

const ModalTitle = styled.div`
  /* Group 18 */

  position: absolute;
  width: 425.95px;
  height: 44.97px;
  /* left: 86px; */
  top: 20px;
  left: 230px;
  font-size: 25px;
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
  border: none;
  /* color: white; */
  font-size: 20px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
    display: none;
`;

const SetProfileImageModal = ({closeImgModal}) => {

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    navigate("/upload", { state : file });
    // navigate('/upload');
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Outer onClick={closeImgModal}>
      <Wrapper>

        {/* Header */}
        <Header>
          <ModalTitle>profile image</ModalTitle>
          <Hr/>
        </Header>

        {/* Contents */}
        <ProfileImage/>
        <Button> basic image </Button>
        <Button style={{marginTop:'80px'}} onClick={handleUploadButtonClick}> upload </Button>
        <HiddenInput type="file" accept=".mp4" ref={fileInputRef} onChange={handleFileInputChange} />
        <CloseIcon onClick={closeImgModal}/>
      </Wrapper>
    </Outer>
  );
};


export default SetProfileImageModal;
