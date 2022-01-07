import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import FilterPage from "./filter";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter" element={<FilterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);