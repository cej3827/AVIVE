import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { IoMdCloseCircle } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdLock, IoMdUnlock, IoMdAddCircle } from "react-icons/io";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

const ModalContainer = styled.div`
    position: absolute;
    width: 500px;
    height: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;
    border: 1px solid #111154;
    border-radius: 10px;

`;

const IconBox = styled.div`
    height: 30%;
    align-self: end;
    margin-right: 10px;
    margin-top: 10px;
`;

const MainContent = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;

    padding-bottom: 20px;

    letter-spacing: 0.03em;
    color: #111154;
`;

const PlayList = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 343px;
    height: 30px;

    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    svg {
    position: absolute;
    right: 10px;
    top: 3px;
  }
`;

const DownContainer = styled.div`
    position: absolute;
    top: 30px;
    width: 340px;

    display: flex;
    flex-direction: column;
    align-items: start;

    background: white;
    border: 0.8px solid rgba(0, 0, 0, 0.6);
`;

const PlayListItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const PlayListIconBox = styled.div`
    position: relative;
    height: 30px;
    width: 30px;
    background-color: red;
`;

const PlayListText = styled.div`
    position: relative;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.03em;

    color: #000000;
`;

const Line = styled.div`
    position: relative;
    width: 338px;
    border: 0.8px solid rgba(0, 0, 0, 0.6);
`;

const AddPlayListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;

    svg {
        position: relative;
  }
`;

const AddText = styled.div`
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    margin: 6px;

    text-align: center;
    letter-spacing: 0.03em;

    color: #000000;
`;;

const WatchPagePlayListModal = ({ closeModal }) => {
    const [playlistState, setplaylistState] = useState(false);

    const handlelistIcon = () => {
        if(playlistState == 0){
            return (
                <FaCaretDown 
                    onClick={()=>{
                        setplaylistState(!playlistState);
                    }}
                    size="20px"/>
            );
        }
        else {
            return (
                <FaCaretUp 
                    onClick={()=>{
                        setplaylistState(!playlistState);
                    }}
                    size="20px"/>
            );
        }
    }

    const playlistColumn = () => {
        return (
            <div>
                <PlayListItem>
                    <PlayListIconBox><IoMdLock size="20px"/></PlayListIconBox>
                    <PlayListText>혜원이의 깔쌈@뽕!한 노래</PlayListText>
                </PlayListItem>
                <Line/>
                <PlayListItem>
                    <PlayListIconBox><IoMdLock size="20px"/></PlayListIconBox>
                    <PlayListText>혜원이의 깔쌈@뽕!한 노래</PlayListText>
                </PlayListItem>
                <Line/>
                <PlayListItem>
                    <PlayListIconBox><IoMdLock size="20px"/></PlayListIconBox>
                    <PlayListText>혜원이의 깔쌈@뽕!한 노래</PlayListText>
                </PlayListItem>
                <Line/>
                <AddPlayListItem>
                    <AddText>Add playlist</AddText>
                </AddPlayListItem>
            </div>
        );
    };

    return(
        <Container>
            <Background>
                <ModalContainer>
                    <IconBox>
                        <IoMdCloseCircle 
                            onClick={closeModal}
                            size="28px"/>
                    </IconBox>
                    <MainContent>
                        <MainText>My playlist</MainText>
                        <PlayList>
                            {handlelistIcon()}
                            {playlistState && 
                                <DownContainer>
                                    {playlistColumn()}
                                </DownContainer>}
                        </PlayList>
                    </MainContent>
                </ModalContainer>
            </Background>
        </Container>
    );
}

export default WatchPagePlayListModal;
