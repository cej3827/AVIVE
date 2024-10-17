import React, { useState } from 'react';
import styled from 'styled-components';

const TabBarContainer = styled.div`
  position: relative;
  // position: absolute;
  width: 50vw;
  height: 5vh;
  left: 12vw;
  top: 2.6vh;
  // border: 1px solid;
`;

const TabButton = styled.button`
  padding: 0.625rem 1.25rem;
  background-color: ${({ active }) => (active ? '#111154' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  width: 11.25rem;
  height: 2.5rem; 
  font-size: 1rem;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 70vw;
  // height: 500px;
  left: 14vw;
  // top: 21.5vw;
  // border: 1px solid;
`;

const HorizontalLine = styled.div`
  position: relative; 
  width: 70vw;
  height: 0.25rem;
  background: #111154;
  left: 12.5rem;
  // top: 19.3rem;
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
