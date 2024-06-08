import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';

const UploadPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 100px;
  padding-top: 40px;
`;

const SideWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 300px;
  width: 25%;
  flex-direction: column;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 370px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const FormTextArea = styled.textarea`
  width: 30%;
  height: 100px;
  resize: none;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
`;

const FormUploadButton = styled.input`
  display: none;
`;

const ThumbnailButton = styled.label`
  display: inline-block;
  width: 12%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ThumbnailPreview = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const FormDropdown = styled.select`
  width: 100%;
  height: 30px;
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
  background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  color: ${props => props.disabled ? '#666' : '#fff'};
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const UploadPage = () => {
  const [videoInfo, setVideoInfo] = useState({
    title: '',
    description: '',
    thumbnail: null,
    thumbnailPreview: '',
    playlist: '',
    category: '',
    hashtags: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const playlists = [
    { id: 1, name: 'Playlist 1' },
    { id: 2, name: 'Playlist 2' },
    { id: 3, name: 'Playlist 3' },
  ];

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  useEffect(() => {
    const { title, description, thumbnail, playlist, category, hashtags } = videoInfo;
    if (title && description && thumbnail && playlist && category && hashtags) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [videoInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoInfo({
      ...videoInfo,
      [name]: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoInfo({
        ...videoInfo,
        thumbnail: file,
        thumbnailPreview: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // 다음 페이지로 이동
      navigate('/upload2', { state: videoInfo });
    }
  };

  const location = useLocation();
  const file = location.state;

  const navigate = useNavigate();
  const handleCloseButtonClick = () => {
    navigate(-1);  //이전 페이지로 이동
  };

  return (
    <UploadPageWrapper>
      <p>Selected file: {file.name}</p>
      <CloseButton onClick={handleCloseButtonClick} />
      <FormWrapper>
        <FormLabel>* Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          value={videoInfo.title}
          onChange={handleChange}
          required
        />
        <FormLabel>* Description</FormLabel>
        <FormTextArea
          name="description"
          value={videoInfo.description}
          onChange={handleChange}
          required
        />
        <FormLabel>* Thumbnail</FormLabel>
        <ThumbnailButton>
          Choose Thumbnail
          <FormUploadButton
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={handleThumbnailChange}
          />
        </ThumbnailButton>
        {videoInfo.thumbnailPreview && (
          <ThumbnailPreview src={videoInfo.thumbnailPreview} alt="Thumbnail Preview" />
        )}
      </FormWrapper>
      <SideWrapper>
        <FormLabel>* Playlist</FormLabel>
        <FormDropdown
          name="playlist"
          value={videoInfo.playlist}
          onChange={handleChange}
          required
        >
          <option value="">Select Playlist</option>
          {playlists.map(playlist => (
            <option key={playlist.id} value={playlist.name}>{playlist.name}</option>
          ))}
        </FormDropdown>
        <FormLabel>* Category</FormLabel>
        <FormDropdown
          name="category"
          value={videoInfo.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </FormDropdown>
        <FormLabel>* Hashtags</FormLabel>
        <FormInput
          type="text"
          name="hashtags"
          value={videoInfo.hashtags}
          onChange={handleChange}
          required
        />
      </SideWrapper>
      <FormButtonWrapper>
        <NextButton type="submit" onClick={handleSubmit} disabled={!isFormValid}>
          Next <AiOutlineArrowRight />
        </NextButton>
      </FormButtonWrapper>
    </UploadPageWrapper>
  );
};

export default UploadPage;
