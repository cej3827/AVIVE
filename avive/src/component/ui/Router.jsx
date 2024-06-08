import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home1 from "../page/Home1Page";
import Home2 from "../page/Home2Page";
import Set from "../page/SetPage";
import Home2Full from "../page/Home2FullPage";
import SetPersonalInformation from "../page/SetPersonalInformationPage";
import SetNotification from "../page/SetNotificationPage";
import CreateChannel from "../page/CreateChannelPage";

const Router = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home1" element={<Home1/>}/>
          <Route path="/Home2" element={<Home2/>}/>
          <Route path="/Home2Full" element={<Home2Full/>}/>
          <Route path="/Set" element={<Set/>}/>
          <Route path="/SetPersonalInformation" element={<SetPersonalInformation/>}/>
          <Route path="/SetNotification" element={<SetNotification/>}/>
          <Route path="/CreateChannel" element={<CreateChannel/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;