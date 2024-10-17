import styled from "styled-components";
import SubscribeButton from "./SubscribeButton";
import ProfileButton from "./ProfileButton";

const ChannelInfoContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 65%;
  height: 15%;
  left: 80px;
  top: 17%;
  // padding: 2%;
  margin-left: 13%;
  margin-top: 10%;
  // border: 1px solid #ccc;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 2%;
  background: #D9D9D9;
`;

const ProfileInfo = styled.div`
    flex-grow: 1;
    margin-left: 2%;
    flex-direction: column;
    // justify-content: space-between;
    // border: solid 1px;
`;

const ChannelName = styled.div`
    display: flex;
    height: 40%;
    // width: 100%;
    // margin-bottom: 5px;
    // align-items: center;
    font-size: 25px;
    // border: solid 1px;
`;

const SubscriberCount = styled.span`
  margin: 10px;
  font-size: 15px;
  color: #666;
  // margin-right: 300px;
`;

const VerticalLine = styled.div`
  width: 4px;
  height: 35px;
  background-color: #ccc;
  margin: 0 20px;
`;

const ChannelId = styled.p`
  margin: 5px 0;
  // padding-bottom: 20px;
  font-size: 18px;
  color: #666;
  // border: solid 1px;
`;

const ChannelIntro = styled.p`
  // border: solid 1px;
  margin: 0;

`;


function ChannelInfo(props) {
    // const { value, onChange } = props;
    const { isOwnChannel, button, profileImageSrc, channelName, subscriberCount, channelId, channelIntro } = props;

    return (
        <ChannelInfoContainer>
          <ProfileImage src={profileImageSrc} alt="프로필 사진" />
          <ProfileInfo>
            <ChannelName>
              {channelName}
              <VerticalLine />
              <SubscriberCount>{subscriberCount}</SubscriberCount>
              {/* <SubscribeButton></SubscribeButton> */}
              {isOwnChannel ? <ProfileButton /> : <SubscribeButton />}
              {/* {isOwnChannel ? <SubscribeButton /> : <SubscribeButton />} */}
            </ChannelName>
            <ChannelId>{channelId}</ChannelId>
            <ChannelIntro>{channelIntro}</ChannelIntro>
          </ProfileInfo>
        </ChannelInfoContainer>
      );
  }
  export default ChannelInfo;