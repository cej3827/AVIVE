import styled from 'styled-components';
import React, { useRef } from 'react';
import { RiUpload2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ModalWrapper = styled.div`
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

const ModalContent = styled.div`
  background: white;
  padding: 0 20px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  // margin-bottom: 16px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  // margin-bottom: 16px;
`;

const UploadButton = styled(RiUpload2Line)`
  font-size: 60px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  padding: 50px;
`;

const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
    display: none;
`;

const UploadModal = ({ closeModal }) => {

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
        <ModalWrapper onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal} />
                <Title>Upload</Title>
                <HorizontalLine />
                <ButtonWrapper>
                  <UploadButton onClick={handleUploadButtonClick} />
                  <HiddenInput type="file" accept=".mp4" ref={fileInputRef} onChange={handleFileInputChange} />
                </ButtonWrapper>
            </ModalContent>
        </ModalWrapper>
    );
};

export default UploadModal;