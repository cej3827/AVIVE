import React from 'react';
// import Channel from './pages/Channel';
import Header from './component/ui/Header/Header';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//Pages
import ChannelPage from './component/page/ChannelPage';
import WatchPage from './component/page/WatchPage';



function App(props) {
  return (
    <BrowserRouter>
    {/* <Header></Header> */}
      <Routes>
        <Route index element={<ChannelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
