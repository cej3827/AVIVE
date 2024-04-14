import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  display: inline-flex;
  width: 180px;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #111154;
  cursor: pointer;
  position: relative;
`;


const Text = styled.span`
  margin-left: 30px;
  margin-bottom: 18px;
  font-size: 18px;
  color: #fff;
`;


const ProfileButton = () => {

  const navigate = useNavigate();

  const goToMyProfile = () => {
    navigate("/my-profile");
  }

  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={goToMyProfile}>
        <Text>{'My prifile'}</Text>
      </Button>
    </div>
  );
};

export default ProfileButton;
