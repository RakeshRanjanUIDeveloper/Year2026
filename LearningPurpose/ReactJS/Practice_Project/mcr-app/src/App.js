import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/bookshelftapp/pages/Home";
import SearchPage from "../src/components/bookshelftapp/pages/SearchPage";
import './App.css'
import SnackTable from "./components/snackTableApp/components/SnackTable";
const App = () => {
  return (
    /* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router> */
    <SnackTable />
  );
};

export default App;
