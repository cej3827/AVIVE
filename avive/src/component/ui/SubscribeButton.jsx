import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell, FaBellSlash, FaCog, FaTimes } from 'react-icons/fa';

const Button = styled.button`
  // margin-right: 100%;
  display: flex;
  width: 11rem;
  height: 2.5rem;
  align-items: center;
  padding-left: 15%;
  padding-top: 10%;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: #fff;
  color: #606060;
  cursor: pointer;
  font-size: 15px;
  margin-left: 100%;
  // position: relative;
`;

const Text = styled.span`
  margin-left: 10%;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  // border: 1px solid;
`;

const BellIcon = styled(FaBell)`
  // margin-top: 15px;
`;

const BellSlashIcon = styled(FaBellSlash)`
  // margin-top: 15px; 
`;

const DropdownWrapper = styled.div`
  margin-left: 18.5%;
  position: absolute;
  width: 10rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 0.4rem 0.9rem;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const SubscriptionButton = () => {
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

  const handleUnsubscribe = () => {
    setSubscribed(false);
    setShowNotificationSettings(false);
  };

  const handleDisableNotification = () => {
    setNotificationEnabled(false);
  };

  const handleEnableNotification = () => {
    setNotificationEnabled(true);
  };

  return (
    // <div style={{ position: 'relative' }}>
    <div>
      <Button onClick={handleButtonClick}>
        <IconWrapper>
          {subscribed ? (notificationEnabled ? <BellIcon /> : <BellSlashIcon />) : ""}
          <Text>{subscribed ? 'Subscribing' : 'Subscribe'}</Text>
        </IconWrapper>
      </Button>
      {subscribed && showNotificationSettings && (
        <DropdownWrapper show={showNotificationSettings}>
          <MenuItem onClick={handleEnableNotification}>
            <FaBell style={{ marginRight: '50px' }} />
              ON
          </MenuItem>
          <MenuItem onClick={handleDisableNotification}>
            <FaBellSlash style={{ marginRight: '45px' }} />
              OFF
          </MenuItem>
          <MenuItem onClick={handleUnsubscribe}>
            <FaTimes style={{ marginRight: '10px' }} />
            Unsubscribing
          </MenuItem>
        </DropdownWrapper>
      )}
    </div>
  );
};

export default SubscriptionButton;