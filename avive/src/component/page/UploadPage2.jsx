import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft} from 'react-icons/ai';

const UploadPage2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  position: relative;
  // border: solid 1px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Choice = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormRadio = styled.input`
  margin-right: 10px;
`;

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PrevButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  color: ${props => props.disabled ? '#666' : '#fff'};
  border: none;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const UploadPage2 = () => {
  const [settings, setSettings] = useState({
    audience: '',
    ageLimit: '',
    publicStatus: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();
  // const videoInfo = location.state;

  useEffect(() => {
    const { audience, ageLimit, publicStatus } = settings;
    if (audience && ageLimit && publicStatus) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [settings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  const handlePrev = () => {
    navigate(-1);
  };

  const handleUpload = () => {
    //업로드
  };

  return (
    <UploadPage2Wrapper>
      <FormWrapper>
        <FormLabel>
          The audience *
        </FormLabel>
        <Choice>
          <FormRadio
            type="radio"
            name="audience"
            value="children"
            checked={settings.audience === 'children'}
            onChange={handleChange}
          />
          Yes, it's for children.
        </Choice>
        <Choice>
          <FormRadio
            type="radio"
            name="audience"
            value="notChildren"
            checked={settings.audience === 'notChildren'}
            onChange={handleChange}
          />
          No, it’s not for children.
        </Choice>
      </FormWrapper>
      <FormWrapper>
        <FormLabel>
          Age limit *
        </FormLabel>
        <Choice>
          <FormRadio
            type="radio"
            name="ageLimit"
            value="over18"
            checked={settings.ageLimit === 'over18'}
            onChange={handleChange}
          />
          Yes, I'll limit it to those over 18 years old.
        </Choice>
        <Choice>
          <FormRadio
            type="radio"
            name="ageLimit"
            value="noLimit"
            checked={settings.ageLimit === 'noLimit'}
            onChange={handleChange}
          />
          No, I won't limit it.
        </Choice>
      </FormWrapper>
      <FormWrapper>
        <FormLabel>
          Public status *
        </FormLabel>
        <Choice>
          <FormRadio
            type="radio"
            name="publicStatus"
            value="public"
            checked={settings.publicStatus === 'public'}
            onChange={handleChange}
          />
          Public
        </Choice>
        <Choice>
          <FormRadio
            type="radio"
            name="publicStatus"
            value="private"
            checked={settings.publicStatus === 'private'}
            onChange={handleChange}
          />
          Private
        </Choice>
      </FormWrapper>
      <FormButtonWrapper>
        <PrevButton onClick={handlePrev}>
          <AiOutlineArrowLeft /> Prev
        </PrevButton>
        <UploadButton onClick={handleUpload} disabled={!isFormValid}>
          Upload
        </UploadButton>
      </FormButtonWrapper>
    </UploadPage2Wrapper>
  );
};

export default UploadPage2;

