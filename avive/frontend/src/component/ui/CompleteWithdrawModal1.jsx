import React, {useState} from "react";
import styled from "styled-components";
import CompleteWithdrawModal2 from "./CompleteWithdrawModal2";

const Wrapper = styled.div`
  /* complete_withdraw_1 */

  position: relative;
  width: 430px;
  height: 159px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

`;

const Contents = styled.div`
  position: absolute;
  width: 375px;
  height: 62px;
  left: 27px;
  top: 29px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
  color:white;
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
  color:white;
  font-size: 18px;
`;

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

const CompleteWithdrawModal1 = ({closeModal1}) => {

  const [isModal2Open, setIsModal2Open] = useState(false);
    
  const openModal2 = () => {
      setIsModal2Open(true); // 모달 열기
  };

  const closeModal2 = () => {
      setIsModal2Open(false); // 모달 닫기
  };

  return (
    <Outer onClick={closeModal1}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Contents>Are you sure you’re leaving ʕ ´•̥̥̥ ᴥ•̥̥̥`ʔ ?</Contents>
        <ButtonOff onClick={openModal2}>yes</ButtonOff>
        <ButtonOn>no!</ButtonOn>
      </Wrapper>
      {isModal2Open && <CompleteWithdrawModal2 closeModal2={closeModal2}/>}
    </Outer>
  );
};

export default CompleteWithdrawModal1;