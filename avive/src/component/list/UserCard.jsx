import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  margin: 10px;
`;

const Card1 = styled.div`
  width: 100px;
  display: grid;
  margin: 15px;
  background-color: white;
  justify-content: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin: 3px;
`;

const UserName = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #000000;
  text-align: center;
`;

const UserDescription = styled.div`
    margin: 2px;
    font-size: 10px;
    text-align: center;
`;

const UserCard = ({ username, description }) => {
  return (
    <Card>
      <Card1>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="User Portrait" />
      <UserName>{username}</UserName>
      <UserDescription>{description}</UserDescription>
    </Card1>
    </Card>
  );
};

export default UserCard;
