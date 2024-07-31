import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell, FaBellSlash, FaCaretDown, FaCaretUp } from 'react-icons/fa';

const NotificationBox = styled.div`
    width: max-content;
    height: 28px;
    display: flex;
    margin-right: 18px;
    padding: 0 5px 0 5px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid grey;
    border-radius: 16px;
`;

const Text = styled.span`
    margin-right: 8px;
    margin-left: 8px;
`;

const IconWrapper = styled.span`
    margin-left: 6px;
    display: inline-flex;
    align-items: center;
    `;

const BellIcon = styled(FaBell)`
    color: #F1D900;
`;

const BellSlashIcon = styled(FaBellSlash)`
`;

const DropdownWrapper = styled.div`
    position: absolute;
    width: 131px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 4px;
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

const WatchSubscriptionButton = () => {
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
    setNotificationEnabled(true);
  };

  const handleDisableNotification = () => {
    setNotificationEnabled(false);
  };

  const handleEnableNotification = () => {
    setNotificationEnabled(true);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
        setShowNotificationSettings(false)
    }, 200);
  }

  return (
    <div style={{ position: 'relative' }} onBlur={handleBlurContainer}>
      <NotificationBox onClick={handleButtonClick}>
        <IconWrapper>
          {subscribed ? (notificationEnabled ? <BellIcon /> : <BellSlashIcon />) : ""}
          <Text>{subscribed ? 'Subscribing' : 'Subscribe'}</Text>
          {subscribed ? (showNotificationSettings ? <FaCaretUp size="13" color="grey"/> : <FaCaretDown size="13" color="grey"/>) : null }
        </IconWrapper>
      </NotificationBox>
      {subscribed && showNotificationSettings && (
        <DropdownWrapper show={showNotificationSettings}>
          <MenuItem onClick={handleEnableNotification}>
            <FaBell style={{ marginRight: '40px' , color:'#F1D900' }} />
              ON
          </MenuItem>
          <MenuItem onClick={handleDisableNotification}>
            <FaBellSlash style={{ marginRight: '40px' }} />
              OFF
          </MenuItem>
          <MenuItem onClick={handleUnsubscribe}>
            Unsubscribing
          </MenuItem>
        </DropdownWrapper>
      )}
    </div>
  );
};

export default WatchSubscriptionButton;
