import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import SignUp from "./components/modal/SignUp/SignUp";
import Login from "./components/modal/Login/Login";

export const Layout = () => {
  const [signUpModalActive, setSignUpModalActive] = useState(false);
  const [authModalActive, setAuthModalActive] = useState(true);

  const toggleSignUpModal = () => {
    setSignUpModalActive(!signUpModalActive);
  };

  const toggleAuthModal = () => {
    setAuthModalActive(!authModalActive);
  }

  return (
    <>
      <Header onClickSignUpModal={toggleSignUpModal} onClickAuthModal={toggleAuthModal} />
      <SignUp onClickModal={toggleSignUpModal} active={signUpModalActive}/>
      <Login onClickModal={toggleAuthModal} active={authModalActive} />
      <Outlet />
      <Footer />
    </>
  );
};
