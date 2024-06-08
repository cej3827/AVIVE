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
import Join2 from './component/page/JoinWebPage/Join2';
import Join3 from './component/page/JoinWebPage/Join3';
import FindPage from './component/page/FindUserPage.jsx/FindPage';
import FindPage1 from './component/page/FindUserPage.jsx/FindPage1';


function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join/1" element={<Join1 />} />
        <Route path="join/2" element={<Join2 />} />
        <Route path="join/3" element={<Join3 />} />
        <Route path="findPage/1" element={<FindPage />} />
        <Route path="findPage/2" element={<FindPage1 />} />
        <Route path="video" element={<WatchPage />} />
        <Route path="video/:videoId" element={<WatchPage />} />
        <Route path="video/:videoId/comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
