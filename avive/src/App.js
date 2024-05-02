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
import CommentPage from './component/page/CommentPage';
import DashBoardPage from './component/page/DashBoardPage';
import LoginPage from './component/page/LoginPage';
import Join1 from './component/page/JoinWebPage/Join1';


function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="join/1" element={<Join1 />} />
        <Route path="video" element={<WatchPage />} />
        <Route path="video/:videoId" element={<WatchPage />} />
        <Route path="video/:videoId/comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
