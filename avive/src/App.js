import React from 'react';
// import Channel from './pages/Channel';
import Header from './component/ui/Header/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Pages
import ChannelPage from './component/page/ChannelPage';
import WatchPage from './component/page/WatchPage';
import ScrollToTop from './component/ScrollTop';


function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route index element={<WatchPage />} />
        <Route path="video/:videoId" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
