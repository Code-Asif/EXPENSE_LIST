import React from "react";

import SearchTab from "./SearchTab";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Add$Cancel from "./Add$Cancel";
import ExpenseList from "./ExpenseList";

const Home = () => {
  return (
    <div className="p-4 md:px-36 lg:px-48">
      {/* NAVBAR */}
      <Navbar />
      {/* SEARCH TAb */}
      <Routes>
        <Route path="/" element={<SearchTab />} />
        <Route path="/addandcancel" element={<Add$Cancel />} />
      </Routes>
      <ExpenseList />
    </div>
  );
};

export default Home;
