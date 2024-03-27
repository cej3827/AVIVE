import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Header from './component/Header';
import SubscribeVideoList from './component/SubscribeVideoList';
import ButtonList from './component/ButtonList';
import RecommendedVideoList from './component/RecommendedVideoList';
import './App.css';

// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다. 
// 같은 JS파일은 확장자를 사용하지 않는다. 

function App() {
  return (
    <div >
      <div style={{position:'sticky', zIndex:'100', top:0, width:'100%', background:'#ffffff'}}>
        <Header/>
      </div>
      <div style={{ paddingTop:"170px"}}>
        <span style={{fontSize:39, marginLeft:"80px"}}>Subscribe</span> <br/>
        <SubscribeVideoList/>
      </div> <br/> <hr/> <br/>
      <div style={{marginLeft:"80px"}}>
        <div style={{marginBottom:'20px'}}><span style={{fontSize:39}}>Recommended</span> <br/></div>
        <ButtonList />
        <RecommendedVideoList/>
      </div>

    </div>
    
  );
}

export default App; //다른 JS파일에서 불러올 수 있도록 내보내주기