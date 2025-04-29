"use client"
import { useContext } from "react";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Language from "./components/Language";
import Modal from "./components/Modal";
import PageTitle from "./components/PageTitle";
import Profile from "./components/Profile";
import Question from "./components/Question";
import { UserProvider, useUser } from "./components/context";

export default function Home() {
  const { page, isModal, setIsModal } = useUser()
  return (
    <div className="container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      <Header />
      <PageTitle />
      {page === "Dashboard" ? <Dashboard /> : page === "Language" ? <Language /> : page === "Category" ? <Category /> : page === "Question" ? <Question /> : page === "Profile" ? <Profile /> : ""}
      <Footer />
      {isModal === true ? <Modal/> : ""}
    </div>
  );
}
