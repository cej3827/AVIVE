import styled from "styled-components";
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import SearchBar from "./SearchBar";


const Logo = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 35px;
  line-height: 56px;
  color: #111154;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
`;

const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 120px;
    background-color: white;
    right: 0px;
    top: 0px;
    // border: solid 2px;
    z-index: 9999;

`;

const Contents = styled.div`
    display: flex;
    width: 96%;
    max-width: 92%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;

const Align = styled.div`
    display: flex;
    width: 10%;
    height: 80%;
    align-items: flex-start;
    justify-content: space-evenly;
    // border: solid 2px;
`;

const Container = styled.div`
    display: grid;
    margin: 5px;

    p {
        margin-bottom: 8px;
    }
`;

function Header() {
    return (
        <Wrapper>
            <Contents>
                <Align></Align>

                <Container>
                    <Logo>
                        AVIVE
                    </Logo>
                    <SearchBar/>
                </Container>
                <Align>
                    <BiSolidVideoPlus className="icon" size="30" color="#111154"/>
                    <MdNotifications className="icon" size="30" color="#111154"/>
                    <BiSolidUserCircle className="icon" size="30" color="#111154"/>    
                </Align>
            </Contents>
        </Wrapper>
    );
}

export default Header;