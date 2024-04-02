// CommunityList.jsx

import React from 'react';
import styled from 'styled-components';
import CommunityItem from './CommunityItem';

const CommunityListWrapper = styled.div`
  // max-width: 600px;
//   margin: 0 auto;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  width: 100%;
  margin: 16px 0;
`;

const CommunityList = ({ communities }) => {
  return (
    <CommunityListWrapper>
      {communities.map((community, index) => (
        <React.Fragment key={index}>
          <CommunityItem
            profileImage={community.profileImage}
            channelName={community.channelName}
            postTime={community.postTime}
            content={community.content}
          />
          {index !== communities.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </CommunityListWrapper>
  );
};

export default CommunityList;
