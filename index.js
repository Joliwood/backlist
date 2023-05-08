// import "./index.css";
// import "./reset.css";
// import App from "./src/App";
const express = require("express");

const server = express();
server.set("view engine", "ejs");
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.render("index");
});

server.use((req, res, next) => res.status(404).render("404"));

server.listen(3000);
