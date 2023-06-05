import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CreateClubForm from "../pages/CreateClubForm";
import Club from "../pages/Club";
import CreateEventForm from "../pages/CreateEventForm";
import Detail from "../pages/Detail";
// import NotFound from "../pages/NotFound";
import Oneday from "../pages/Oneday";
import Chat from "../pages/Chat";
import MyInfoClub from "../pages/MyInfoClub";
import CreateFeed from "../pages/CreateFeed";
import Navbar from "../component/Navbar";
import CreateOnedayForm from "../pages/CreateOnedayForm";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user/mypage" element={<MyInfoClub />} />
          <Route path="/create-club-form" element={<CreateClubForm />} />
          <Route path="/club" element={<Club />} />
          <Route path="/oneday" element={<Oneday />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create-event-form/:id" element={<CreateEventForm />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create-feed" element={<CreateFeed />} />
          <Route path="/create-oneday-form" element={<CreateOnedayForm />} />


          {/* <Route path="/404" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
