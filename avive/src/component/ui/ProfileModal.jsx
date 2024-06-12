import React from "react";
import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const PersonIcon = styled(IoPersonSharp)`
  /* Account */

  position: absolute;
  width: 37.87px;
  height: 37.87px;
  left: 18.94px;
  top: 78.27px;

  background: url(.png);
`;

const ChannelIcon = styled(MdVideoLibrary)`
    /* Video Playlist */

  position: absolute;
  width: 37.87px;
  height: 37.87px;
  left: 18.94px;
  top: 126.24px;

  background: url(.png);

`;

const SetIcon = styled(IoMdSettings)`
  /* Vector */

  position: absolute;
  left: 10.53%;
  right: 76.64%;
  top: 70.63%;
  bottom: 18.52%;

  background: #000000;

`;

const Wrapper = styled.div`
  /* view_profile */

  position: relative;
  width: 231px;
  height: 255px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Header = styled.div`
  /* Group 186 */

  position: absolute;
  width: 175.47px;
  height: 44.97px;
  left: 18.94px;
  top: 17.67px;

`;

const HeaderName = styled.div`
  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 68.17px;
  top: 17.67px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  align-items: center;

  color: #000000;


`;

const HeaderImg = styled.div`
  /* Vector */

  position: absolute;
  width: 38.92px;
  height: 38.92px;
  left: 18.94px;
  top: 21.46px;

  background: #000000;

`;

const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25%;
`;

const HeaderId = styled.div`
  /* @soy */

  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 69.43px;
  top: 37.4px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #B7B7B7;

`;

const MenuStyle = styled.div`
  /* Group 187 */

  position: absolute;
  width: 174.21px;
  height: 38.83px;
  left: 18.94px;
  top: 77.31px;

`;

const MenuText = styled.div`
  /* my profile */

  position: absolute;
  width: 124.98px;
  height: 35.56px;
  left: 68.17px;
  top: 77.31px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;

  color: #000000;

`;

const LogoutBtn = styled.button`
  /* log out */

  position: absolute;
  width: 124.98px;
  height: 25.25px;
  left: 47.97px;
  top: 218.7px;

  font-family: 'Jockey One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;

  color: #BBBBBB;
  background-color: white;
  border: none;
`;

export default function ProfileModal(props){
  return(
    <Wrapper>
      {/*Header*/}
      <Header>
        <HeaderImg>
          <ImgStyle src={props.img}/>
        </HeaderImg>
        <HeaderName/>
        <HeaderId/>
      </Header>

      {/*Menu*/}
      <PersonIcon/>
      <MenuText>my profile</MenuText>
      <ChannelIcon/>
      <MenuText>my channel</MenuText>
      <SetIcon/>
      <MenuText>setting</MenuText>

      {/*log out button*/}
      <LogoutText>log out</LogoutText>
    </Wrapper>
  );
}