import React, { useState } from 'react';
import styled from 'styled-components';

const TabBarContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 35px;
  left: 180px;
  top: 330px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? '#111154' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  border-radius: 75px;
  cursor: pointer;
  width: 180px;
  height: 40px; 
  font-size: 16px;
`;

const ContentContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 500px;
  left: 200px;
  top: 380px;
`;

const HorizontalLine = styled.div`
  width: 1013px;
  height: 4px;
  background: #111154;
  position: absolute;
  left: 200px;
  top: 366px;
`;

function TabBar({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const renderContent = () => {
    const selectedTab = tabs.find(tab => tab.key === activeTab);
    return selectedTab ? selectedTab.content : null;
  };

  return (
    <div>
      <TabBarContainer>
        {tabs.map(tab => (
          <TabButton key={tab.key} active={activeTab === tab.key} onClick={() => handleTabChange(tab.key)}>
            {tab.label}
          </TabButton>
        ))}
      </TabBarContainer>
      <HorizontalLine />
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </div>
  );
};

export default TabBar;
