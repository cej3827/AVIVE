import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell, FaBellSlash, FaCog, FaTimes } from 'react-icons/fa';

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
  const [subscribed, setSubscribed] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  const handleButtonClick = () => {
    if (subscribed) {
      setShowNotificationSettings(!showNotificationSettings);
    } else {
      setSubscribed(true);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={handleButtonClick}>
        <Text>{'My prifile'}</Text>
      </Button>
    </div>
  );
};

export default ProfileButton;
