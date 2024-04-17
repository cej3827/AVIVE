import React from 'react';
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
import ProfilePage from './component/page/ProfilePage';


function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      {/* <Routes>
        <Route index element={<WatchPage />} />
        <Route path="video/:videoId" element={<WatchPage />} />
      </Routes> */}
      <Routes>
        <Route index element={<ChannelPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/my-channel" element={<ChannelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
