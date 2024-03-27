import React from 'react';
// import Channel from './pages/Channel';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//Pages
import ChannelPage from './component/page/ChannelPage';



function App(props) {
  return (
    // <div className="App">
    //   {/* <h1>AVIVE</h1> */}
    //   <Channel channelInfo={channelInfo} />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<ChannelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
