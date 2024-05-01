// import React from 'react';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';

const UploadPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UploadForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormUploadButton = styled.input`
  display: none;
`;

const ThumbnailButton = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FormDropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UploadPage = () => {
    const [videoInfo, setVideoInfo] = useState({
        title: '',
        description: '',
        thumbnail: null,
        playlist: '',
        category: '',
        hashtags: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideoInfo({
          ...videoInfo,
          [name]: value,
        });
    };
    
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setVideoInfo({
          ...videoInfo,
          thumbnail: file,
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // 업로드 처리 로직 구현
        console.log('Uploaded video info:', videoInfo);
        // 다음 페이지로 넘어가는 로직 추가
      };

    const location = useLocation()
    const file = location.state;

    // const handleUpload = () => {
    //     console.log('Uploading file:', file);
    // };
    const navigate = useNavigate();
    const handleCloseButtonClick = () => {
        navigate(-1);  //이전 페이지로 이동
      };

    return (
    <UploadPageWrapper>
        <p>Selected file: {file.name}</p>
        <UploadForm onSubmit={handleSubmit}>
        <CloseButton onClick={handleCloseButtonClick} />
        {/* <CloseButton /> */}
        <FormTitle>Upload Video</FormTitle>
        <FormLabel>Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          value={videoInfo.title}
          onChange={handleChange}
          required
        />
        <FormLabel>Description</FormLabel>
        <FormTextArea
          name="description"
          value={videoInfo.description}
          onChange={handleChange}
          required
        />
        <FormLabel>Thumbnail</FormLabel>
        <ThumbnailButton>
          Choose Thumbnail
          <FormUploadButton
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={handleThumbnailChange}
          />
        </ThumbnailButton>
        <FormLabel>Playlist</FormLabel>
        <FormDropdown
          name="playlist"
          value={videoInfo.playlist}
          onChange={handleChange}
          required
        >
          <option value="">Select Playlist</option>
          {/* 플레이리스트 옵션들 */}
        </FormDropdown>
        <FormLabel>Category</FormLabel>
        <FormDropdown
          name="category"
          value={videoInfo.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {/* 카테고리 옵션들 */}
        </FormDropdown>
        <FormLabel>Hashtags</FormLabel>
        <FormInput
          type="text"
          name="hashtags"
          value={videoInfo.hashtags}
          onChange={handleChange}
          required
        />
        <FormButtonWrapper>
          <NextButton type="submit">
            Next <AiOutlineArrowRight />
          </NextButton>
        </FormButtonWrapper>
      </UploadForm>
    </UploadPageWrapper>
  );
};

export default UploadPage;
