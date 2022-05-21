import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/Market";
import Navbar from "..//Components/Navbar";
import Footer from "../Components/Footer";
import Detail from "../Components/Detail";

const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Detail" exact element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;
