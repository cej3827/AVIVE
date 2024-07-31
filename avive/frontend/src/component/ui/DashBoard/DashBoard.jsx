import React from "react"
import styled from "styled-components"
import { HiSearch } from "react-icons/hi";
import ManagementVideo from "./ManagementVideo";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const ChannelVideoBox = styled.div`
    height: 22%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const TabBox = styled.div`
    width: 100%;
    height: 78%;
`

const Management = styled.text`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    letter-spacing: 0.04em;

    margin-left: 15px;
    margin-top: 20px;
`;

const TapContainer = styled.div`
    display: flex;
    felx-direction: row;
    margin: 25px 25px 0 10px;
    align-items: center;
`;

const Select = styled.div`
    width: 130px;
    height: 35px;    
    background: rgba(17, 17, 84, 0.8);
    border-radius: 20px;
    justify-content: center;
    display: inline-flex;
    position: relative;

    margin-right: 20px;
`;

const TextStlye1 = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`;

const TextStlye2 = styled.div`
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
`;

const SearchContainer = styled.div`
  width: 300px;
  height: 30px;
  position: relative;
  margin-left: auto;
  border: 1.5px solid black;

  svg {
    position: absolute;
    top: 1px;
    right: 10px;
  }
`;

const Search = styled.input`
    background-color: white;
    width: 95%;
    height: 90%;
    outline: none;
    border: 0;
`;

function DashBoard(){
    return (
        <Wrapper>
            <ChannelVideoBox>
                <Management>Management</Management>
                <TapContainer>
                    <Select>
                        <TextStlye1>Videos</TextStlye1>
                    </Select>
                    <TextStlye2>Analytics</TextStlye2>
                    <SearchContainer>
                        <Search/>
                        <HiSearch color="grey" size="28"/>
                    </SearchContainer>
                </TapContainer>
            </ChannelVideoBox>
            <TabBox><ManagementVideo/></TabBox>
        </Wrapper>
    );
}

export default DashBoard;