import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../components/sidebar";
import Footer from "./footer";
import Header from "./header";


const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {

  const [openPanel, setOpenPanel] = useState(false);
  const [openSide, setOpenSide] = useState(false)
  return (
    <div className={`flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100`}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {page === "home" && <Header openLang={openLang} openPanel={setOpenPanel} openSide={openSide} setOpenSlide={() => setOpenSide(true)} />}
      <main className="w-full flex-1 mt-16">
        <div className={`fixed top-0 h-screen w-screen bg-app-transparent z-10 ${!openSide && "hidden"}`}></div>
        <Sidebar open={openSide} setOpen={setOpenSide} openLang={openLang} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
