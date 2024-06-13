import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* logout_2 */

  position: relative;
  width: 430px;
  height: 159px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

const Contents = styled.div`
  /* You have been logged out. Please log in again. */

  position: absolute;
  width: 375px;
  height: 62px;
  left: 27px;
  top: 29px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;


`;


const ButtonOn = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 165px;
  top: 108px;

  background: #111154;
  border-radius: 15px;

  text-align: center;

`;

export default function LogoutModal2(){
  return (
    <Wrapper>
      <Contents>You have been logged out. 
      Please log in again.</Contents>
      <ButtonOn>OK</ButtonOn>
    </Wrapper> 
  );
}