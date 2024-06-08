// import React from "react";
// import styled from "styled-components";

// import Header from "../components/Header";
// import VideoList from "../components/VideoList";
// import CategoryList from "../components/CategoryList";
// import SearchBar from "../components/SearchBar";
// import { useNavigate } from "react-router-dom";

// const Subtitle = styled.div`
//   font-size: 30px;
//   text-align: left;
//   margin-left: 30px;
//   margin-top: 35px;
//   bottom: 0;
//   display: inline-block;
//   white-space: nowrap;
//   overflow: hidden;
//   float: left;
// `;

// const ViewAllBtn = styled.div`
//   float: right;
//   font-size: 20px;
//   text-align: right;
//   padding-top: 65px;
//   background-color: white;
//   border: none;
// `;

// function Home2(){

//   const navigate = useNavigate();

//   return(
//     <div style={{display:'flex', height: '100vh', flexDirection:'column'}}>
//       <div style={{position:'fixed', display:'block', zIndex:'100', top:'0', width:'100%', background:'#ffffff'}}>
//         <Header />
//         <div style={{marginLeft:'400px', marginTop:'90px', marginRight:'auto'}}>
//           <SearchBar/>
//         </div>
//       </div>
//       <section style={{paddingTop:'150px'}}></section>
//       <ViewAllBtn style={{width:'100px', background:'red'}} onClick={()=>{navigate('/Home2Full');}}>+viewAll</ViewAllBtn>

//       {/* <div style={{marginTop:"100px", marginLeft:"70px"}}>
//         <div>
//           <Subtitle>Subscribe</Subtitle>
//           <ViewAllBtn onClick={goToHome2Full}>+ view all</ViewAllBtn>
//         </div>
//         <div style={{paddingTop:'70px'}}>
//           <VideoList/> 
//         </div>
//       </div> 

//       <br/><hr/>

//       <div style={{ paddingLeft:"50px" }}>
//         <div>
//           <Subtitle>Recommended</Subtitle>
//         </div>
//         <CategoryList style={{float:'left'}}/>
//         <VideoList/>
//       </div> */}
//     </div>
//   );
// }

// export default Home2;

import React from "react";
import styled from "styled-components";
import Header from "../ui/Header/Header";
import { useNavigate } from "react-router-dom";

const Subtitle = styled.div`
  font-size: 30px;
  text-align: left;
  margin-left: 30px;
  margin-top: 35px;
  bottom: 0;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  float: left;
`;

const Container = styled.div`
    display: grid;
    width: 70%;
    margin: 0 auto;
    padding-top: 20px;
`;

const ViewAllBtn = styled.div`
  float: right;
  font-size: 20px;
  text-align: right;
  padding-top: 65px;
  background-color: white;
  border: none;
`;

export default function WatchPage(){

  const navigate = useNavigate();

  return(
    <div>
        <Header/>
            <main>
                <section style={{paddingTop:"150px"}}></section>
                <Container>
                    <ViewAllBtn style={{width:'100px', background:'red'}} onClick={()=>{navigate('/Home2Full');}}>+viewAll</ViewAllBtn>
                </Container>
            </main>
    </div>
  );
}