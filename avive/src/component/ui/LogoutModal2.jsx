import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;


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
  color:white;
  font-size: 18px;

`;

const LogoutModal2 = ({closeLogoutModal2}) => {

  const navigate = useNavigate();

  const onClickToHome1 = () =>{
    navigate('/login');
  };

  return (
    <Outer onClick={closeLogoutModal2}>
      <Wrapper>
        <Contents>You have been logged out. 
        Please log in again.</Contents>
        <ButtonOn onClick={onClickToHome1}>OK</ButtonOn>
      </Wrapper> 
    </Outer>
  );
}

export default LogoutModal2;