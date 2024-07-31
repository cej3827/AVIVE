import React from "react";
import UserCard from "./UserCard";
import styled from 'styled-components';

const users = [
  { username: "User 1", description: "Description 1" },
  { username: "User 2", description: "Description 2" },
  { username: "User 3", description: "Description 3" },
  { username: "User 4", description: "Description 4" },
  { username: "User 5", description: "Description 5" },
  { username: "User 6", description: "Description 6" },
  { username: "User 7", description: "Description 7" },
  { username: "User 8", description: "Description 8" },
  { username: "User 9", description: "Description 9" },
  { username: "User 10", description: "Description 10" },
];

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 10px 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function UserCardList() { 
    return (
      <Container>
        {users.map((user, index) => (
          <UserCard key={index} username={user.username} description={user.description} />
        ))}
      </Container>
    );
  };

export default UserCardList;