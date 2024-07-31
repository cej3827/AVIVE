import React, {useState} from "react";
import styled from "styled-components";
import HeaderSet from "../ui/Header/HeaderSet";
// import SwitchButton from "../ui/SwitchButton";

const SemiTitle = styled.div`
  /* subscribe */

  position: absolute;
  width: 425.95px;
  height: 38.61px;
  left: 68px;
  top: 10px;

  font-family: 'Jockey One';
  font-weight: 400;
  font-size: 33px;
  font-style: normal;
  line-height: 56px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Contents = styled.div`
  /* We’ll let you know if there’s an update on the channel you subscried to. */

  position: absolute;
  width: 1000px;
  height: 52px;
  left: 68px;
  top: 60px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 35px;

  color: #A5A5A5;
`;

const Wrapper = styled.div`
  /* Group 177 */
  position: absolute;
  width: 1140px;
  height: 101px;
  left: 68px;
  top: 150px;
  bottom: 101px;
`;

const Line = styled.hr`
  /* Line 4 */

  position: absolute;
  width: 1450px;
  height: 0px;
  left: 54px;
  top: 125px;

  border: 1px solid #D6D6D6;
  transform: rotate(-0.15deg);

`;

const ToggleContainer = styled.div`
  position: relative;
  margin-top:8rem;
 // padding-top: 8rem;
  left: 1400px;
  cursor: pointer;

  > .toggle-container {
    width: 68px;
    height: 38px;
    display: inline-block;
    border-radius: 30px;
    background-color: rgb(233,233,234);}
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0,200,102);
    transition : 0.3s
  }

  > .toggle-circle {
    position: absolute;
    top: 4px;
    left: 3px;
    display: inline-block;
    width: 33px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(255,254,255);
    transition : 0.3s
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  } >.toggle--checked {
    left: 32px;
    transition : 0.3s
  }

`;

const ToggleSwitch = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <>

      <ToggleContainer
        // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
        onClick={toggleHandler}
      >
        {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
        {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
      </ToggleContainer>
    </>
  );
};

export default function SetNotification(){
  return(
    <div>
      <HeaderSet name="notification"/>
      <Wrapper>
        
        <div>
          <SemiTitle>subscribe</SemiTitle>
          <Contents>We’ll let you know if there’s an update on the channel you subscried to.</Contents>
          <ToggleSwitch/>
          <Line/>
        </div>

        <div>
          <SemiTitle style={{top:'170px'}}>my channel</SemiTitle>
          <Contents style={{top:'220px'}}>We’ll let you know if any video on your channel get a comment.</Contents>
          <Line style={{top:'290px'}}/>
          <ToggleSwitch style={{top:'200px'}}/>
        </div>

        <div>
          <SemiTitle style={{top:'330px'}}>reply</SemiTitle>
          <Contents style={{top:'380px'}}>We’ll let you know if there’s a comment in your comment.</Contents>
          <Line style={{top:'450px'}}/>
          <ToggleSwitch style={{top:'400px'}}/>
        </div>

        <div>
          <SemiTitle style={{top:'510px'}}>mentioned</SemiTitle>
          <Contents style={{top:'560px'}}>We'll let you know, If someone mentions you.</Contents>
          <ToggleSwitch style={{top:'600px'}}/>
        </div>

      </Wrapper>
    </div>
  );
}