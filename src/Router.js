import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ProfilePage from "./section/profilePage/ProfilePage";
import NoMatchRoute from "./NoMatchRoute";
import Feed from "./section/feed/Feed";
import DemoProfilePage from "./components/demoProfilePage/DemoProfilePage";

function Router() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index  element={<Feed />} />
            <Route path="DemoProfilePage" element={<DemoProfilePage />} />
            <Route path=":handlerName" element={<ProfilePage />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/ProfilePage" element={<ProfilePage/>}/> */}
          <Route path="*" element={<NoMatchRoute/>}/>
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default Router;
