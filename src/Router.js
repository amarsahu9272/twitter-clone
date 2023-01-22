import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DialogBox from "./components/dialogbox/DialogBox";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
function Router() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dialogbox/DialogBox" element={<DialogBox />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default Router;
