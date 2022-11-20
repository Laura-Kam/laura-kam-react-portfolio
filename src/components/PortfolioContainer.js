//importing pages - dynamic components

import React, { useState } from "react";
import Nav from "./Navigation";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";

//if statements to render correct page according to user click
export default function PortfolioContainer({ currentPage }) {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  // const renderPage = () => {
  return function renderPage() {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <AboutMe />;
  };

  // const handlePageChange = (page) => setCurrentPage(page);
  // //render correct page
  // return (
  //   <div>
  //     <Nav currentPage={currentPage} handlePagechange={handlePageChange} />
  //     <div>{renderPage()}</div>
  //   </div>
  // );
}
