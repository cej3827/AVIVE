import React, {useState} from "react";
import styled from "styled-components";
import LogoutModal2 from "./LogoutModal2";

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
  /* logout_1 */

  position: relative;
  width: 430px;
  height: 159px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

const Contents = styled.div`
  /* Do you want to log out ? */

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

const ButtonOff = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 107px;
  top: 105px;

  background: #C3C3C4;
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
  font-size: 18px;
`;

const ButtonOn = styled.button`
  /* Rectangle 48 */

  position: absolute;
  width: 100px;
  height: 35px;
  left: 226px;
  top: 105px;

  background: #111154;
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
  font-size: 18px;
`;

const LogoutModal1 = ({closeLogoutModal}) => {
  
  const [isLogoutModal2Open, setIsLogoutModal2Open] = useState(false);
    
  const openLogoutModal2 = () => {
      setIsLogoutModal2Open(true); // 모달 열기
  };

  const closeLogoutModal2 = () => {
      setIsLogoutModal2Open(false); // 모달 닫기
  };

  return (
    <Outer onClick={closeLogoutModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Contents>Do you want to log out ?</Contents>
        <ButtonOff onClick={openLogoutModal2}>yes</ButtonOff>
        <ButtonOn onClick={closeLogoutModal}>no !</ButtonOn>
      </Wrapper>
      {isLogoutModal2Open && <LogoutModal2 closeLogoutModal2={closeLogoutModal2} />}
    </Outer>
  );
};

export default LogoutModal1;