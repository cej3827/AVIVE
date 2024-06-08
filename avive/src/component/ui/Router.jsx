import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home1 from "../page/Home1Page";
import Home2 from "../page/Home2Page";
import Set from "../page/SetPage";
import Home2Full from "../page/Home2FullPage";
import SetPersonalInformation from "../page/SetPersonalInformationPage";
import SetNotification from "../page/SetNotificationPage";
import CreateChannel from "../page/CreateChannelPage";
import FindPage from "../page/FindUserPage/FindPage";
import FindPage1 from "../page/FindUserPage/FindPage1";
import Join1 from "../page/JoinWebPage/Join1";
import Join2 from "../page/JoinWebPage/Join2";
import Join3 from "../page/JoinWebPage/Join3";
import ChannelPage from "../page/ChannelPage";
import CommentPage from "../page/CommentPage";
import DashBoardPage from "../page/DashBoardPage";
import LoginPage from "../page/LoginPage";
import ProfilePage from "../page/ProfilePage";
import SetPage from "../page/SetPage";
import UploadPage from "../page/UploadPage";
import UploadPage2 from "../page/UploadPage2";
import WatchPage from "../page/Home2Page";

const Router = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home1" element={<Home1/>}/>
          <Route path="/Home2page" element={<Home2/>}/>
          <Route path="/Home2Full" element={<Home2Full/>}/>
          <Route path="/Set" element={<Set/>}/>
          <Route path="/SetPersonalInformation" element={<SetPersonalInformation/>}/>
          <Route path="/SetNotification" element={<SetNotification/>}/>
          <Route path="/CreateChannel" element={<CreateChannel/>}/>
          <Route path="/FindPage" element={<FindPage/>}/>
          <Route path="/FindPage1" element={<FindPage1/>}/>
          <Route path="/Join1" element={<Join1/>}/>
          <Route path="/Join2" element={<Join2/>}/>
          <Route path="/Join3" element={<Join3/>}/>
          <Route path="/ChannelPage" element={<ChannelPage/>}/>
          <Route path="/CommentPage" element={<CommentPage/>}/>
          <Route path="/CreateChannelPage" element={<CreateChannel/>}/>
          <Route path="/DashBoardPage" element={<DashBoardPage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/ProfilePage" element={<ProfilePage/>}/>
          <Route path="/SetNotificationPage" element={<SetNotification/>}/>
          <Route path="/SetPage" element={<SetPage/>}/>
          <Route path="/SetPersonalInfromationPage" element={<SetPersonalInformation/>}/>
          <Route path="/UploadPage" element={<UploadPage/>}/>
          <Route path="/UploadPage2" element={<UploadPage2/>}/>
          <Route path="/WatchPage" element={<WatchPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;