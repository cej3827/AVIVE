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
  background-color: #fff;
  color: #606060;
  cursor: pointer;
  font-size: 15px;
  position: relative;
`;

const Text = styled.span`
  margin-left: 20px;
  margin-bottom: 18px;
`;

const IconWrapper = styled.span`
  display: inline-flex;
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
  position: absolute;
  width: 160px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const MenuItem = styled.div`
  padding: 6px 12px;
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
    <div style={{ position: 'relative' }}>
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