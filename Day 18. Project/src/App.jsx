import { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import SampleProject from "./pages/SampleProject/SampleProject";
import Studio from "./pages/Studio/Studio";
import Thinking from "./pages/Thinking/Thinking";
import Feed from "./pages/Feed/Feed";
import Contact from "./pages/Contact/Contact";

import transition from "./transition";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/work/sample-project" element={<SampleProject />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
