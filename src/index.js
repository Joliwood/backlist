import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import express from "express";

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("the first test works =");
});

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

server.listen(3000);
